DROP PROCEDURE IF EXISTS PR_CADASTRO_SAIDA
GO

CREATE PROCEDURE PR_CADASTRO_SAIDA
( @Saida AS tpSaida READONLY)
AS
BEGIN

INSERT INTO tbSaida (IdProduto, Quantidade, ValorTotal, ValorUnitario)
SELECT IdProduto, Quantidade, ValorTotal, ValorUnitario FROM @Saida

UPDATE P
SET P.QuantidadeDisponivel = (P.QuantidadeDisponivel - S.Quantidade)
FROM
	@Saida S
INNER JOIN tbProduto P
	ON S.IdProduto = P.IdProduto


END