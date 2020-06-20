using Entidade;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Negocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ClientesController : BaseController
	{
		private NegocioCliente negocio;
		public ClientesController(IConfiguration config) : base(config)
		{
			negocio = new NegocioCliente(PegarStringConexao());
		}

		[HttpGet]
		[Route("ConsultarClientes")]
		public IActionResult ConsultarClientes()
		{
			try
			{
				IEnumerable<Cliente> clientes = negocio.ConsultarClientes();

				return Ok(clientes);
			}
			catch
			{
				return BadRequest("Não foi possível consultar os clientes.");
			}
		}

		[HttpPost]
		[Route("SalvarCliente")]
		public IActionResult SalvarCliente([FromBody]Cliente cliente)
		{
			try
			{
				negocio.SalvarCliente(cliente);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest("Não foi possível salvar o cliente.");
			}
		}

		[HttpGet]
		[Route("ExcluirCliente")]
		public IActionResult ExcluirCliente(int idCliente)
		{
			try
			{
				return Ok(negocio.ExcluirCliente(idCliente));
			}
			catch
			{
				return BadRequest("Não foi possível excluir o cliente");
			}
		}
	}
}
