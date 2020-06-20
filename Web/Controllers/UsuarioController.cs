using Entidade;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Negocio;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.WindowsRuntime;

namespace Web.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UsuarioController : BaseController
	{
		private NegocioUsuario negocio;
		public UsuarioController(IConfiguration config) : base(config)
		{
			negocio = new NegocioUsuario(PegarStringConexao());
		}

		[HttpPost]
		[Route("Logar")]
		public IActionResult Logar([FromBody]LoginUsuario login)
		{
			try
			{
				Usuario usuario = negocio.LogarUsuario(login);
				if (usuario == null)
					return BadRequest("Falha na autenticação");

				return Ok(usuario);
			}
			catch
			{
				return BadRequest("Exceção na autenticação");
			}
		}

		[HttpPost]
		[Route("CadastroUsuario")]
		public IActionResult CadastroUsuario([FromBody]Usuario usuario)
		{
			try
			{
				string msgValidacao = negocio.ValidarUsuario(usuario);
				if (!string.IsNullOrEmpty(msgValidacao))
					return BadRequest(msgValidacao);

				negocio.CadatrarUsuario(usuario);
					return Ok();
			}
			catch
			{
				return BadRequest("Não foi possível cadastrar o usuário");
			}
		}

		[HttpGet]
		[Route("ConsultarUsuarios")]
		public IActionResult ConsultarUsuarios(int idCliente)
		{
			try
			{
				return Ok(negocio.ConsultarUsuarios(idCliente));
			}
			catch(Exception ex)
			{
				return BadRequest("Não foi possível consultar os usuários");
			}
		}

		[HttpGet]
		[Route("ExcluirUsuario")]
		public IActionResult ExcluirUsuario(int idUsuario)
		{
			try
			{
				negocio.ExcluirUsuario(idUsuario);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest("Não foi possível excluir o usuário");
			}
		}

	}
}
