DROP PROCEDURE IF EXISTS PR_CADASTRO_ENTRADA
GO

CREATE PROCEDURE PR_CADASTRO_ENTRADA
( @Entrada AS tpEntrada READONLY)
AS
BEGIN

INSERT INTO tbEntrada (IdProduto, Quantidade, ValorTotal, ValorUnitario)
SELECT IdProduto, Quantidade, ValorTotal, ValorUnitario FROM @Entrada

UPDATE P
SET P.QuantidadeDisponivel = (P.QuantidadeDisponivel + E.Quantidade)
FROM
	@Entrada E
INNER JOIN tbProduto P
	ON E.IdProduto = P.IdProduto


END