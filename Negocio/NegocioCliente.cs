using AcessoDados;
using Entidade;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Negocio
{
	public class NegocioCliente
	{
		private ADCliente dados;
		private NegocioUsuario negocioUsuario;
		
		public NegocioCliente(string stringConexao)
		{
			dados = new ADCliente(stringConexao);
			negocioUsuario = new NegocioUsuario(stringConexao);
		}

		public IEnumerable<Cliente> ConsultarClientes()
		{
			return dados.ConsultarClientes();
		}

		public void SalvarCliente(Cliente cliente)
		{
			dados.SalvarCliente(cliente);
		}

		public bool ExcluirCliente(int idCliente)
		{
			try
			{
				IEnumerable<Usuario> usuarios = negocioUsuario.ConsultarUsuarios(idCliente);
				usuarios.ToList().ForEach(u => negocioUsuario.ExcluirUsuario(u.IdUsuario));

				dados.ExcluirCliente(idCliente);
				return true;
			}
			catch(Exception ex)
			{
				return false;
			}			
		}
	}
}
