import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; // Your page component

function App() {
  return (
    <div>
      {/* Your Navbar Links are safe here because they are inside BrowserRouter now! */}
      <nav style={{ padding: '20px', background: '#2c3e50' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
      </nav>

      {/* Your Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;