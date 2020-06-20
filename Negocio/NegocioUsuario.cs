using AcessoDados;
using Entidade;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Security.Cryptography;

namespace Negocio
{
	public class NegocioUsuario
	{
		ADUsuario dadosUsuario;

		public NegocioUsuario(string stringConexao)
		{
			dadosUsuario = new ADUsuario(stringConexao);
		}

		public Usuario LogarUsuario(LoginUsuario login)
		{
			Usuario usuario = dadosUsuario.ValidarAcesso(login);
			if(usuario == null)
			{
				throw new Exception("Falha de autenticação");
			}

			return usuario;
		}

		public IEnumerable<Usuario> ConsultarUsuarios(int idCliente)
		{
			return dadosUsuario.ConsultarUsuarios(idCliente);
		}

		public void CadatrarUsuario(Usuario usuario)
		{
			dadosUsuario.CadastrarUsuario(usuario);
		}

		public void ExcluirUsuario(int idUsuario)
		{
			dadosUsuario.ExcluirUsuario(idUsuario);
		}

		public string ValidarUsuario(Usuario usuario)
		{
			if (string.IsNullOrEmpty(usuario.Nome))
				return "Nome vazio";

			if (string.IsNullOrEmpty(usuario.Login))
				return "Login vazio";

			if (usuario.IdCliente <= 0)
				return "Usuário não atrelado a cliente";

			return string.Empty;
		}
	}
}
