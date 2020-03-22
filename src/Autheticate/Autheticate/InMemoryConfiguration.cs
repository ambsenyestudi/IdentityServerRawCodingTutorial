using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace Autheticate
{
    //renamed due to the name clashing with IConfiguration
    public static class InMemoryConfiguration
    {
        public static IEnumerable<IdentityResource> GetIdentityResources() =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                //new IdentityResources.Profile(),
                new IdentityResource
                {
                    Name = "rc.scope",
                    UserClaims =
                    {
                        "rc.grandma"
                    }

                }
            };

        public static IEnumerable<ApiResource> GetApis() =>

            new List<ApiResource> {
                new ApiResource("ApiOne"),
                new ApiResource("ApiTwo", new string[]{"rc.api.grandma"})
            };
        public static IEnumerable<Client> GetClients() =>
            new List<Client>
            {
                new Client
                {
                    ClientId = "client_id",
                    ClientSecrets = { new Secret("client_secret".ToSha256()) },
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    AllowedScopes = { "ApiOne" }
                },
                new Client
                {
                    ClientId = "client_id_mvc",
                    ClientSecrets = { new Secret("client_secret_mvc".ToSha256()) },
                    AllowedGrantTypes = GrantTypes.Code,
                    RedirectUris = { "https://localhost:44392/signin-oidc" },
                    AllowedScopes = { 
                        "ApiOne" ,
                        "ApiTwo",
                        IdentityServerConstants.StandardScopes.OpenId,
                        //IdentityServerConstants.StandardScopes.Profile,
                        "rc.scope"
                    },
                    AllowOfflineAccess = true,
                    AlwaysIncludeUserClaimsInIdToken = true,
                    RequireConsent = false

                },
                new Client
                {
                    AllowAccessTokensViaBrowser = true,
                    AllowedCorsOrigins = { "https://localhost:44365" },
                    AllowedGrantTypes=GrantTypes.Implicit,
                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        "ApiOne" 
                    },
                    ClientId="client_id_js",
                    RedirectUris = { "https://localhost:44365/home/signin" },
                    RequireConsent = false
                }

            };
    }
}
