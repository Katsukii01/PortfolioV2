import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n'; 
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://2c8ab37bc0b9d65f1ca8909b75481589@o4509679965241344.ingest.de.sentry.io/4509679966617680",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)