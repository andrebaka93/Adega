using System;
using System.Collections.Generic;
using System.Text;

namespace Entidade
{
	public class Usuario
	{
		public int IdUsuario { get; set; }
		public string Nome { get; set; }
		public string Login { get; set; }
		public string Senha { get; set; }
		public int IdCliente { get; set; }
	}

	public class LoginUsuario
	{
		public string Login { get; set; }
		public string Senha { get; set; }
	}
}
