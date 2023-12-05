import React, { useState, createContext } from 'react';

export const FilmeContext = createContext({});

export default function FilmeProvider({ children }) {
  const [titulo, setTitulo] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [faixa_etaria, setFaixa_Etaria] = useState('');
  const [duracao, setDuracao] = useState('');
  const [url_imagem, setUrl_Imagem] = useState('');

  return (
    
  );
}