CREATE PROCEDURE Pr_Consultar_Clientes
AS
BEGIN

SELECT * FROM tbCliente where ativo = 1

END