'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Box } from '@mui/material';
import styled from 'styled-components';

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock authentication
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <TextField
          label="Usuário"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </StyledForm>
    </FormContainer>
  );
};

export default LoginForm;
