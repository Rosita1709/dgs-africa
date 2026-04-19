import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from 'react-ga4';
import App from "./App.tsx";
import "./index.css";

ReactGA.initialize('G-D62R12Y0P3');

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);