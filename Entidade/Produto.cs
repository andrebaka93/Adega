using System;

namespace Entidade
{
	public class Produto
	{
		public int IdProduto { get; set; }
		public string Nome { get; set; }
		public string Descricao { get; set; }
		public decimal QuantidadeDisponivel { get; set; }
		public decimal AlertaMinimo { get; set; }
		public int AlertaMaximo { get; set; }
		public int IdCliente { get; set; }
	}
}
