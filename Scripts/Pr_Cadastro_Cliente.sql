CREATE PROCEDURE Pr_Cadastro_Cliente (
	@Cliente AS TpCliente READONLY
)
AS BEGIN

IF EXISTS (SELECT * FROM tbCliente WHERE IdCliente = (SELECT TOP 1 IdCliente FROM @Cliente))
BEGIN

	UPDATE C
	SET
		Nome = CL.Nome,
		Endereco = CL.Endereco
	FROM
		@Cliente CL
	INNER JOIN tbCliente C
		ON CL.IdCliente = C.IdCliente

END
ELSE
BEGIN

	INSERT INTO tbCliente (Nome, Endereco, Ativo)
	SELECT Nome, Endereco, 1 FROM @Cliente

END


END