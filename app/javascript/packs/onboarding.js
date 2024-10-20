import React from 'react';
import { createRoot } from 'react-dom/client';
import StrCal from '../components/StrCal';

// Initializes the React application in which App is rendered
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.body.appendChild(document.createElement("div"));
  const root = createRoot(rootElement);
  root.render(<StrCal />);
});
