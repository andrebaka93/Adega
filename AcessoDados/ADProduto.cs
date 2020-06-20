using Dapper;
using Entidade;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace AcessoDados
{
	public class ADProduto
	{
		private string stringConexao;
		public ADProduto(string stringConexao)
		{
			this.stringConexao = stringConexao;
		}
		public Produto ConsultarProduto(int id)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				return conexao.Query<Produto>(@"PR_Consultar_Produto @Id", new { Id = id }).FirstOrDefault();
			}
		}

		public IEnumerable<Produto> ConsultarTodosProdutos(int idCliente)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				return conexao.Query<Produto>(@"PR_Consultar_Produtos @IdCliente", new { IdCliente = idCliente });
			}
		}

		public void CadastrarSaida(Saida saida)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				conexao.Query(@"PR_Cadastro_Saida @Saida",
					new { Saida = ADUtils.ConverterParaDataTable(new List<Saida>() { saida }).AsTableValuedParameter("tpSaida") });
			}
		}

		public void CadastrarEntrada(Entrada entrada)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				conexao.Query(@"PR_Cadastro_Entrada @Entrada",
					new { Entrada = ADUtils.ConverterParaDataTable(new List<Entrada>() { entrada }).AsTableValuedParameter("tpEntrada") });
			}
		}

		public bool Inserir(Produto produto)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				return conexao.Query<bool>(@"PR_CADASTRO_PRODUTO @Produto",
					new { Produto = ADUtils.ConverterParaDataTable(new List<Produto>() { produto }).AsTableValuedParameter("tpProduto") }).FirstOrDefault();
			}
		}

		public bool Excluir(int id)
		{
			using (SqlConnection conexao = new SqlConnection(this.stringConexao))
			{
				return conexao.Query<bool>(@"PR_Excluir_Produto @Id", new { Id = id }).FirstOrDefault();
			}
		}
	}
}
