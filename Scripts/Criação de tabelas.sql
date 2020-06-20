USE [DB_ADEGA]
GO

/****** Object:  UserDefinedTableType [dbo].[tpEntrada]    Script Date: 05/06/2020 21:41:28 ******/
CREATE TYPE [dbo].[tpEntrada] AS TABLE(
	[IdEntrada] [int] NOT NULL,
	[IdProduto] [int] NOT NULL,
	[ValorTotal] [decimal](18, 0) NOT NULL,
	[ValorUnitario] [decimal](18, 0) NOT NULL,
	[Quantidade] [int] NOT NULL
)
GO


CREATE TABLE tbCliente (
	IdCliente INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Nome VARCHAR(100) NOT NULL,
	Endereco VARCHAR(300) NOT NULL,
	Ativo BIT DEFAULT 1
)
GO

CREATE TABLE tbUsuario (
	IdUsuario INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Nome VARCHAR(150) NOT NULL,
	Login VARCHAR(15) NOT NULL,
	Senha VARCHAR(100) NOT NULL,
	IdCliente INT NOT NULL FOREIGN KEY REFERENCES tbCliente
)
GO

CREATE TABLE tbProduto (
	IdProduto INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Nome VARCHAR(30) NOT NULL,
	Descricao VARCHAR(400),
	QuantidadeDisponivel INT NOT NULL DEFAULT 0,
	AlertaMinimo INT,
	AlertaMaximo INT,
	IdCliente INT NOT NULL FOREIGN KEY REFERENCES tbCliente
)
GO

CREATE TABLE tbEntrada (
	IdEntrada INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	IdProduto INT NOT NULL FOREIGN KEY REFERENCES tbProduto,
	ValorTotal decimal(7,2) NOT NULL,
	ValorUnitario decimal(7,2) NOT NULL,
	Quantidade INT NOT NULL
)
GO

CREATE TABLE tbSaida (
	IdSaida INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	IdProduto INT NOT NULL FOREIGN KEY REFERENCES tbProduto,
	ValorTotal decimal(7,2) NOT NULL,
	ValorUnitario decimal(7,2) NOT NULL,
	Quantidade INT NOT NULL
)
GO