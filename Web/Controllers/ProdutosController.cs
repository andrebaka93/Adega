using Negocio;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Entidade;
using System;

namespace Web.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ProdutosController : BaseController
	{
		private NegocioProduto negocio;
		public ProdutosController(IConfiguration config) : base(config)
		{
			negocio = new NegocioProduto(PegarStringConexao());
		}

		[Route("ConsultarProdutos")]
		[HttpGet]
		public IActionResult ConsultarProdutos(int idCliente)
		{
			return Ok(negocio.ConsultarProdutos(idCliente));
		}

		[Route("Salvar")]
		[HttpPost]
		public IActionResult SalvarProduto([FromBody]Produto produto)
		{
			try
			{
				string msgValidacao = negocio.ValidarProduto(produto);
				if (!string.IsNullOrEmpty(msgValidacao))
					return BadRequest(msgValidacao);

				bool ret = negocio.CadastrarProduto(produto);
				if (ret)
					return Ok();
				else
					return BadRequest("Não foi possível cadastrar o produto");
			}
			catch
			{
				return BadRequest("Não foi possível cadastrar o produto");
			}
		}

		[Route("Excluir")]
		[HttpPost]
		public IActionResult ExcluirProduto([FromBody]int idProduto)
		{
			try
			{
				negocio.ExcluirProduto(idProduto);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest("Não foi possível excluir o produto.");
			}
		}

		[Route("Entrada")]
		[HttpPost]
		public IActionResult CadastrarEntrada(Entrada entrada)
		{
			try
			{
				negocio.CadastrarEntrada(entrada);
				return Ok();
			}
			catch (Exception ex) { return BadRequest("Não foi possível cadastrar a entrada do produto."); }
		}

		[Route("Saida")]
		[HttpPost]
		public IActionResult CadastrarSaida(Saida saida)
		{
			try
			{
				negocio.CadastrarSaida(saida);
				return Ok();
			}
			catch { return BadRequest("Não foi possível cadastrar a entrada do produto."); }
		}
	}
}