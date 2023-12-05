import React, { useState, createContext, useEffect } from 'react';

export const FilmeContext = createContext({});

export default function FilmeProvider({ children }) {
  const [sinopse, setSinopse] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');
  const [duracao, setDuracao] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [filmes, setFilmes] = useState([]);
  const url = "https://banco-cine-verse.vercel.app/Filmes";

  useEffect(() => {
    buscarFilmes();
  }, []); 

  function buscarFilmes() {
    fetch(url)
      .then((respFetch) => {
        if (!respFetch.ok) {
          throw new Error(`Erro na requisição: ${respFetch.status}`);
        }
        return respFetch.json();
      })
      .then((respJson) => setFilmes(respJson))
      .catch((erro) => console.error('Erro ao buscar filmes:', erro));
  }

  return (
    <FilmeContext.Provider value={{ sinopse, faixaEtaria, duracao, urlImagem, setSinopse, setFaixaEtaria, setDuracao, setUrlImagem, filmes, buscarFilmes }}>
      {children}
    </FilmeContext.Provider>
  );
}
