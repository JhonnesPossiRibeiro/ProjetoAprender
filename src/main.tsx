import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routers/Index.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes/>
  </StrictMode>,
)
