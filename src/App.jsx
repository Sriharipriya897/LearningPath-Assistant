import React from 'react';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="container">
      <header style={{ margin: '40px 0', textAlign: 'center' }}>
        <h1 style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(to right, #3b82f6, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0
        }}>
          AI Learning Assistant
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Your personalized engineering mentor</p>
      </header>

      <Dashboard />
      <ChatInterface />
    </div>
  );
}

export default App;
