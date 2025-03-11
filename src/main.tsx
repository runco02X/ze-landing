import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TermsOfUse from './pages/TermsOfUse.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import LegalMentions from './pages/LegalMentions.tsx';
import CookiesPolicy from './pages/CookiesPolicy.tsx';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cgu" element={<TermsOfUse />} />
          <Route path="/politiq" element={<PrivacyPolicy />} />
          <Route path="/mentions-legales" element={<LegalMentions />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
