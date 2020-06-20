using Dapper;
using Entidade;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace AcessoDados
{
	public class ADCliente
	{
		private string stringConexao;

		public ADCliente(string stringConexao)
		{
			this.stringConexao = stringConexao;
		}

		public IEnumerable<Cliente> ConsultarClientes()
		{
			using(SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				return conexao.Query<Cliente>(@"Pr_Consultar_Clientes");
			}
		}

		public void SalvarCliente(Cliente cliente)
		{
			using(SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				conexao.Query(@"Pr_Cadastro_Cliente @Cliente",
							new { Cliente = ADUtils.ConverterParaDataTable(new List<Cliente>() { cliente }).AsTableValuedParameter("tpCliente") });
			}
		}

		public void ExcluirCliente(int idCliente)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				conexao.Query(@"Pr_Inativa_Cliente @idCliente", new { idCliente });
			}
		}
	}
}
