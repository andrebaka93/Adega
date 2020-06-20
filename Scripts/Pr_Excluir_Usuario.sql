CREATE PROCEDURE Pr_Excluir_Usuario
	@idUsuario INT
AS BEGIN

DELETE FROM tbUsuario WHERE IdUsuario = @idUsuario

END