using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using IdentityModel.Client;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiTwo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHttpClientFactory httpClientFactory;

        public HomeController(IHttpClientFactory clientFactory)
        {
            this.httpClientFactory = clientFactory;
        }
        public async Task<IActionResult> Index()

        {
            //retrieve access token
            var serverClient = httpClientFactory.CreateClient();

            //the authority url
            var discoveryDocument = await serverClient.GetDiscoveryDocumentAsync("https://localhost:5101/");

            var tokenResponse = await serverClient.RequestClientCredentialsTokenAsync(
                new ClientCredentialsTokenRequest
                {
                    Address = discoveryDocument.TokenEndpoint,
                    ClientId = "client_id",
                    ClientSecret = "client_secret",
                    Scope = "ApiOne",
                });

            //retrieve secret data
            var apiClient = httpClientFactory.CreateClient();
            apiClient.SetBearerToken(tokenResponse.AccessToken);

            //Api One url
            var response = await apiClient.GetAsync("https://localhost:5011/api/secret");
            var content = await response.Content.ReadAsStringAsync();

            return Ok(new
            {
                access_token = tokenResponse.AccessToken,
                message = content,
            });

        }
    }
}