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
('Digimon Adventure 02: O Início',
 'Daisuke, Miyako, Iori, Takeru Takashi, Hikari e Ken devem conciliar novas responsabilidades com seus parceiros Digimon. Mas Rui Owada, um jovem misterioso, parece afirmar ser o primeiro humano a fazer parceria com um Digimon.',
 12,
 87,
 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/07/imagem_2023_07_31_161156773__232207.png');

-- Inserindo o segundo filme
INSERT INTO Filmes (titulo, sinopse, faixa_etaria, duracao, URL_Imagem) VALUES 
('Jogos Vorazes – A Cantiga dos Pássaros e das Serpentes',
 'Coriolanus Snow orienta e desenvolve sentimentos pela tributo feminina ao Distrito 12 durante os 10º Jogos Vorazes.',
  14,
  158, 
  'https://br.web.img3.acsta.net/pictures/23/09/20/17/54/4013241.jpg');