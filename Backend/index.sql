CREATE TABLE CineUsuarios (
    id_CineUsuario SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL 
);

CREATE TABLE Filmes (
    id_filme SERIAL PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    sinopse VARCHAR(500) NOT NULL,
    faixa_etaria INTEGER NOT NULL,
    duracao INTEGER NOT NULL,
    URL_Imagem VARCHAR(900) NOT NULL
);

CREATE TABLE SalasDeCinema (
    id_sala SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    capacidade INTEGER NOT NULL,
    tipo_de_sala INTEGER NOT NULL
);

CREATE TABLE Ingresso (
    id_reserva SERIAL PRIMARY KEY,
    id_CineUsuario INTEGER,
    numero_assento INTEGER,
    preco_total DECIMAL(10,2),
    Horario  VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_CineUsuario) REFERENCES CineUsuarios(id_CineUsuario)
);

-- Inserção sala 
INSERT INTO SalasDeCinema (nome, capacidade, tipo_de_sala)
VALUES
    ('Sala Normal', 100, 1),
    ('Sala 3D', 80, 2),
    ('Sala Imax', 120, 1);

-- Inserindo o primeiro usuário
INSERT INTO CineUsuarios (nome, email, senha) VALUES ('Guilbert', 'Guilbert@email.com', 'senha123');

-- Inserindo o segundo usuário
INSERT INTO CineUsuarios (nome, email, senha) VALUES ('Daniel', 'Daniel@email.com', 'senha456');

-- Inserindo o terceiro usuário
INSERT INTO CineUsuarios (nome, email, senha) VALUES ('Carlos', 'Carlos@email.com', 'senha789');

-- Inserindo o primeiro filme
INSERT INTO Filmes (titulo, sinopse, faixa_etaria, duracao, URL_Imagem) VALUES 
('Matrix', 'Um hacker descobre a verdade sobre sua realidade', 14, 136, 'https://exemplo.com/matrix.jpg');

-- Inserindo o segundo filme
INSERT INTO Filmes (titulo, sinopse, faixa_etaria, duracao, URL_Imagem) VALUES 
('O Poderoso Chefão', 'A ascensão de uma família mafiosa', 16, 175, 'https://exemplo.com/poderoso_chefao.jpg');

-- Inserindo o terceiro filme
INSERT INTO Filmes (titulo, sinopse, faixa_etaria, duracao, URL_Imagem) VALUES 
('Cidadão Kane', 'A vida de um magnata da mídia', 12, 119, 'https://exemplo.com/cidadao_kane.jpg');

-- Inserindo o quarto filme
INSERT INTO Filmes (titulo, sinopse, faixa_etaria, duracao, URL_Imagem) VALUES 
('Titanic', 'Um romance épico durante o desastre do Titanic', 14, 195, 'https://exemplo.com/titanic.jpg');
