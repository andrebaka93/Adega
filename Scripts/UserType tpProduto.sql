CREATE TYPE tpProduto AS TABLE (
	IdProduto INT NOT NULL,
	Nome VARCHAR(30) NOT NULL,
	Descricao VARCHAR(400),
	QuantidadeDisponivel INT,
	AlertaMinimo INT,
	AlertaMaximo INT,
	IdCliente INT NOT NULL
)