# Authorization Code Flow

The original video [Authorization Code Flow](https://www.youtube.com/watch?v=8zupoD2pzZY&list=PLOeFnOV9YBa7dnrjpOG6lMpcyd7Wn7E8V&index=12)

## Notes
- Extract the url's and data from the discovery document(1:00)
- Create a new Client at Identity server api (3:00)
- Add ApiTwo as a resource at identitty server api, and create a new mvc solution (4:00)
- AddOpenIdConnect (nuget Microsoft.AspNetCore.Authentication.OpenIdConnect) to your mvc project (5:10)
- Naming the cookie and setting Autentication default scheme and challange (6:10)
- ResponseType code at openid config (10:45)
- Home controller (12:15)
- Inspect the authz error(15:30)
- Default spec redirect uris on identity api in memory config (17:10)
- Figure the error of identity api (17:50)
- Register openID scopes as user information in inmemoryconfiguration at identity api(19:30)
- Create your own user scope (22:00)
- Add Identity resources at startup (23:10)
- Add openid as allowed scoper for mvc clienta at identity api (24:00)
- Add Profile to socopes and clients(25:00)

Ends redirecting to identity server but gives account error
