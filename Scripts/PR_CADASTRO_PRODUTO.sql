DROP PROCEDURE IF EXISTS PR_CADASTRO_PRODUTO
GO

CREATE PROCEDURE PR_CADASTRO_PRODUTO
( @Produto as tpProduto READONLY)
AS
BEGIN

IF EXISTS (SELECT * FROM tbProduto WHERE IdProduto = (SELECT TOP 1 IdProduto FROM @Produto))
BEGIN

	UPDATE P
	SET
		Nome = PR.Nome,
		Descricao = PR.Descricao,
		QuantidadeDisponivel = PR.QuantidadeDisponivel,
		AlertaMaximo = PR.AlertaMaximo,
		AlertaMinimo = PR.AlertaMinimo
	FROM
		@Produto PR
	INNER JOIN tbProduto P
		ON PR.IdProduto = p.IdProduto

END
ELSE
BEGIN

	INSERT INTO tbProduto (Nome, Descricao, QuantidadeDisponivel, AlertaMaximo, AlertaMinimo, IdCliente)
	SELECT Nome, Descricao, QuantidadeDisponivel, AlertaMaximo, AlertaMinimo, IdCliente FROM @Produto

END

END