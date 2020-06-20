using System;
using System.Collections.Generic;
using System.Text;

namespace Entidade
{
	public class Alerta
	{
		public Produto IdProduto { get; set; }
		public int QuantidadeMaxima { get; set; }
		public int QuantidadeMinima { get; set; }
	}
}
