DROP PROCEDURE IF EXISTS Pr_Cadastro_Usuario
GO

CREATE PROCEDURE Pr_Cadastro_Usuario
( @Usuario as tpUsuario READONLY)
AS
BEGIN

IF EXISTS (SELECT * FROM tbUsuario WHERE IdUsuario = (SELECT TOP 1 IdUsuario FROM @Usuario))
BEGIN

	UPDATE U
	SET
		Nome = Us.Nome,
		Login = US.Login,
		Senha = US.Senha
	FROM
		@Usuario US
	INNER JOIN tbUsuario U
		ON U.IdUsuario = US.IdUsuario

END
ELSE
BEGIN

	INSERT INTO tbUsuario(Nome, Login, Senha, IdCliente)
	SELECT Nome, Login, Senha, IdCliente FROM @Usuario

END

END