import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginLayout = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('user', username);
      navigate('/'); // Redirect to homepage
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="What's your name?"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginLayout;
