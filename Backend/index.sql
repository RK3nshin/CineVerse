CREATE TABLE Usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL, -- Recomendado armazenar a senha como um hash
    endereco VARCHAR(255)
);

CREATE TABLE Filmes (
    id_filme SERIAL PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    titulo_original VARCHAR(80) NOT NULL
    sinopse VARCHAR(500) NOT NULL
    faixa_etaria INTEGER NOT NULL
    duracao INTEGER NOT NULL
);
CREATE TABLE SalasDeCinema (git remote -v

    id_sala SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    capacidade INTEGER NOT NULL,
    tipo_de_sala INTEGER NOT NULL
);
CREATE TABLE Sessoes (
    id_sessao SERIAL PRIMARY KEY,
    id_filme INTEGER,
    id_sala INTEGER,
    data_hora_inicio TIMESTAMP,
    data_hora_fim TIMESTAMP,
    preco_ingresso DECIMAL(10,2),
    FOREIGN KEY (id_filme) REFERENCES Filmes(id_filme),
    FOREIGN KEY (id_sala) REFERENCES SalasDeCinema(id_sala)
);

CREATE TABLE Reservas (
    id_reserva SERIAL PRIMARY KEY,
    id_sessao INTEGER,
    id_usuario INTEGER,
    numero_assento INTEGER,
    preco_total DECIMAL(10,2),
    FOREIGN KEY (id_sessao) REFERENCES Sessoes(id_sessao),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

-- Inserção sala 
INSERT INTO SalasDeCinema (nome, capacidade, tipo_de_sala)
VALUES
    ('Sala 1', 100, 1),
    ('Sala 2', 80, 2),
    ('Sala 3', 120, 1);





