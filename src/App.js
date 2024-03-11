import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminHome from './components/vistas/indexadmin';
import UserHome from './components/vistas/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/user" element={<UserHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
