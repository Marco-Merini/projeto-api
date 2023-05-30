CREATE DATABASE Prestadores;
USE Prestadores;

CREATE TABLE Prestador (
  codigo_prestador INT PRIMARY KEY,
  nome_prestador VARCHAR(100),
  cpf_prestador VARCHAR(14)
);
