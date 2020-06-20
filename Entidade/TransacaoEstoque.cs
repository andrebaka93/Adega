using System;
using System.Collections.Generic;
using System.Text;

namespace Entidade
{
	public class Entrada
	{
		public int IdEntrada { get; set; }
		public int IdProduto { get; set; }
		public decimal ValorTotal { get; set; }
		public decimal ValorUnitario { get; set; }
		public int Quantidade { get; set; }
	}

	public class Saida
	{
		public int IdSaida { get; set; }
		public int IdProduto { get; set; }
		public decimal ValorTotal { get; set; }
		public decimal ValorUnitario { get; set; }
		public int Quantidade { get; set; }
	}
}
