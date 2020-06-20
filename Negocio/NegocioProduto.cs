using AcessoDados;
using Entidade;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Negocio
{
	public class NegocioProduto
	{
		ADProduto dadosProduto;
		public NegocioProduto(string stringConexao)
		{
			this.dadosProduto = new ADProduto(stringConexao);
		}

		public IEnumerable<Produto> ConsultarProdutos(int idCliente)
		{
			return dadosProduto.ConsultarTodosProdutos(idCliente).OrderBy(p => p.Nome);
		}

		public bool CadastrarProduto(Produto produto)
		{
			try
			{
				dadosProduto.Inserir(produto);
				return true;
			}
			catch { return false; }

		}

		public bool ExcluirProduto(int id)
		{
			return dadosProduto.Excluir(id);
		}

		public void CadastrarEntrada(Entrada entrada)
		{
			entrada.ValorUnitario = entrada.ValorTotal / entrada.Quantidade;
			dadosProduto.CadastrarEntrada(entrada);
		}

		public void CadastrarSaida(Saida saida)
		{
			saida.ValorUnitario = saida.ValorTotal / saida.Quantidade;
			dadosProduto.CadastrarSaida(saida);
		}

		public string ValidarProduto(Produto produto)
		{
			if (string.IsNullOrEmpty(produto.Nome))
				return "Nome inválido";

			if (produto.QuantidadeDisponivel < 0)
				return "Quantidade não pode ser menor que 0";

			return string.Empty;
		}
	}
}
