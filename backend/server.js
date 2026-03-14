const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) console.error(' MySQL erreur:', err);
  else console.log(' MySQL connecté !');
});

// Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// POST — Recevoir le formulaire
app.post('/api/contacts', async (req, res) => {
  const { name, company, email, phone, budget, deadline, project } = req.body;

  // 1. Sauvegarder dans MySQL
  const sql = `INSERT INTO contacts 
    (name, company, email, phone, budget, deadline, project) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, company, email, phone, budget, deadline, project], 
    async (err) => {
      if (err) return res.status(500).json({ error: 'Erreur base de données' });

      try {
        // 2. Email à l'entreprise
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_DEST,
          subject: ` Nouvelle demande de ${name}`,
          html: `
            <h2 style="color:#16a34a">Nouvelle demande de contact — DGS Africa</h2>
            <table style="border-collapse:collapse;width:100%">
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Nom</b></td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Entreprise</b></td><td style="padding:8px;border:1px solid #ddd">${company}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Email</b></td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Téléphone</b></td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Budget</b></td><td style="padding:8px;border:1px solid #ddd">${budget}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Délai</b></td><td style="padding:8px;border:1px solid #ddd">${deadline}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Projet</b></td><td style="padding:8px;border:1px solid #ddd">${project}</td></tr>
            </table>
          `
        });

        // 3. Email de confirmation au client
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: ' Confirmation de votre demande — DGS Africa',
          html: `
            <h2 style="color:#16a34a">Bonjour ${name},</h2>
            <p>Nous avons bien reçu votre demande et vous répondrons sous <b>24-48h</b>.</p>
            <p>Voici un récapitulatif de votre demande :</p>
            <table style="border-collapse:collapse;width:100%">
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Projet</b></td><td style="padding:8px;border:1px solid #ddd">${project}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Budget</b></td><td style="padding:8px;border:1px solid #ddd">${budget}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd"><b>Délai</b></td><td style="padding:8px;border:1px solid #ddd">${deadline}</td></tr>
            </table>
            <br/>
            <p>Cordialement,</p>
            <p><b>L'équipe DGS Africa</b></p>
          `
        });

        res.status(200).json({ message: 'Message envoyé avec succès !' });

      } catch (emailErr) {
        console.error(' Erreur email:', emailErr);
        res.status(500).json({ error: 'Erreur envoi email' });
      }
  });
});

// GET — Récupérer tous les contacts
app.get('/api/contacts', (req, res) => {
  db.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Serveur démarré sur http://localhost:${PORT}`);
});