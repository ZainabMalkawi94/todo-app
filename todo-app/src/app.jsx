import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDo from './components/todo/todo';
import { SettingsProvider } from './Context/Setings/SettingsContext';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import SettingsForm from './components/Settings/SettingsForm'; 

export default function App() {
  return (
    <SettingsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/settings" element={<SettingsForm />} />
        </Routes>
        <Footer />
      </Router>
    </SettingsProvider>
  );
}


