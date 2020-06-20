CREATE TYPE tpEntrada AS TABLE(
	IdEntrada INT NOT NULL,
	IdProduto INT NOT NULL,
	ValorTotal decimal(7,2) NOT NULL,
	ValorUnitario decimal(7,2) NOT NULL,
	Quantidade INT NOT NULL
)