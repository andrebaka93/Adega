using Dapper;
using Entidade;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace AcessoDados
{
	public class ADUsuario
	{
		private string stringConexao;
		public ADUsuario(string stringConexao)
		{
			this.stringConexao = stringConexao;
		}

		public Usuario ValidarAcesso(LoginUsuario login)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				return conexao.Query<Usuario>(@"PR_Validar_Acesso @Login, @Senha", new { Login = login.Login, Senha = login.Senha }).FirstOrDefault();
			}
		}

		public void CadastrarUsuario(Usuario usuario)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				conexao.Query(@"Pr_Cadastro_Usuario @Usuario",
					new { Usuario = ADUtils.ConverterParaDataTable(new List<Usuario>() { usuario }).AsTableValuedParameter("tpUsuario") });
			}
		}

		public void ExcluirUsuario(int idUsuario)
		{
				using (SqlConnection conexao = new SqlConnection(this.stringConexao))
				{
					conexao.Query(@"Pr_Excluir_Usuario @idUsuario", new { idUsuario });
				}
		}

		public IEnumerable<Usuario> ConsultarUsuarios(int idCliente)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				return conexao.Query<Usuario>(@"Pr_Consultar_Usuarios @idCliente", new { idCliente });
			}
		}
	}
}
