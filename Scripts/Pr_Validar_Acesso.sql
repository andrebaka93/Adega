CREATE PROCEDURE Pr_Validar_Acesso (
@Login VARCHAR(15), 
@Senha VARCHAR(100)
)
AS BEGIN

SELECT * FROM tbUsuario WHERE LOGIN = @Login AND Senha = @Senha


END