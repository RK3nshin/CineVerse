import React, { useState, createContext } from 'react';

export const FilmeContext = createContext({});

export default function FilmeProvider({ children }) {
  const [titulo, setTitulo] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [faixa_etaria, setFaixa_Etaria] = useState('');
  const [duracao, setDuracao] = useState('');
  const [url_imagem, setUrl_Imagem] = useState('');
  const [filmes, setFilmes] = useState([]);
  const url = "https://banco-cine-verse.vercel.app/Filmes";

  function buscarFilmes() {
    fetch(url)
      .then((respFetch) => respFetch.json())
      .then((respJson) => setFilmes(respJson))
      .catch((erro) => console.warn(erro))
  }

  return (
    <FilmeContext.Provider value={{ titulo, sinopse, faixa_etaria, duracao, url_imagem, setTitulo, setSinopse, setFaixa_Etaria, setDuracao, setUrl_Imagem, buscarFilmes, filmes }} >
      {children}
    </FilmeContext.Provider>
  );
}