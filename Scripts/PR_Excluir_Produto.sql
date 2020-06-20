CREATE PROCEDURE PR_Excluir_Produto (
	@Id INT
)
AS
BEGIN

UPDATE tbProduto
SET Excluido = 1
WHERE IdProduto = @Id

END