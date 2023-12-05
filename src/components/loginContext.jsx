// loginContext.js
import React, { useState, createContext } from 'react';

export const LoginContext = createContext({});

export default function LoginProvider({ children }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  const handleLogin = async () => {
    try {
      // ... (o restante do código de login permanece o mesmo)

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
        body: JSON.stringify({ nome, email: emailCadastro, senha: senhaCadastro }),
      });

      const data = await response.json();

      if (data.id_CineUsuario) {
        console.log('Cadastro bem-sucedido');
        return true; // Indica que o cadastro foi bem-sucedido
      } else {
        console.error('Erro ao cadastrar usuário');
        return false; // Indica que houve um problema no cadastro
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
