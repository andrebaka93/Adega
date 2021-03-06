﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Controllers
{
	public class BaseController : ControllerBase
	{
		private readonly IConfiguration config;
		public BaseController(IConfiguration config)
		{
			this.config = config;
		}

		protected string PegarStringConexao()
		{
#if DEBUG
			return config.GetConnectionString("DB_ADEGA_LOCAL");
#endif
#if !DEBUG
			return config.GetConnectionString("DB_ADEGA_AZURE");
#endif

		}
	}
}
