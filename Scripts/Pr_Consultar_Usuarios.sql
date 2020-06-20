CREATE PROCEDURE Pr_Consultar_Usuarios
	@idCLiente int
AS
BEGIN

SELECT * FROM tbUsuario where IdCliente = @idCLiente

END