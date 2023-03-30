import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './shared/AuthProvider';
import { Toaster } from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);

