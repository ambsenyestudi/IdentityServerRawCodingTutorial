﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace ApiOne.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecretController : ControllerBase
    {
        [Authorize]
        public string Index()
        {

            var claims = User.Claims.ToList();
            return "secret message from ApiOne";
        }
    }
}