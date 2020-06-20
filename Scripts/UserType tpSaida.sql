CREATE TYPE tpSaida AS TABLE (
	IdSaida INT NOT NULL,
	IdProduto INT NOT NULL,
	ValorTotal decimal(7,2) NOT NULL,
	ValorUnitario decimal(7,2) NOT NULL,
	Quantidade INT NOT NULL
)