CREATE PROCEDURE Pr_Inativa_Cliente
	@idCliente INT
as
begin

update tbCliente
set ativo = 0
where IdCliente = @idCliente

END