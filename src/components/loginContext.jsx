import React, { useState, createContext } from 'react';
import axios from 'axios'; 

export const LoginContext = createContext({});

export default function LoginProvider({ children }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://banco-cine-verse.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();
        
      if (data.autenticado) {
        setAutenticado(true);
        console.log('Login bem-sucedido');
      } else {
        setAutenticado(false);
        console.error('Credenciais inválidas');
      }
    } catch (error) {
      setAutenticado(false);
      console.error('Erro ao realizar login:', error);
    }
  };

  const handleCadastro = async (nome, emailCadastro, senhaCadastro) => {
    try {
      const response = await fetch('https://banco-cine-verse.vercel.app/CineUsuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email: emailCadastro,
          senha: senhaCadastro,
        }),
      });
  
      if (!response.ok) {
        console.error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
        return false;
      }
  
      const data = await response.json();
  
      if (data.id_CineUsuario) {
        console.log('Cadastro bem-sucedido');
        return true;
      } else {
        console.error('Erro ao cadastrar usuário:', data);
        return false;
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
      return false;
    }
  };
  
  return (
    <LoginContext.Provider value={{ email, setEmail, senha, setSenha, autenticado, handleLogin, handleCadastro }}>
      {children}
    </LoginContext.Provider>
  );
}
