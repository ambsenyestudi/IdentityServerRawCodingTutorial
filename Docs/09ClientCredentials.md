# Client credentials
On [Client credentials](https://www.youtube.com/watch?v=jARHHUsljeo&list=PLOeFnOV9YBa7dnrjpOG6lMpcyd7Wn7E8V&index=11) video we setup the basic 
- Install setup [identity server 4](IdentityServer.md)
- Create a config static file (8:45)
- Add configurations to startup setup (11:30)
- Well known configuration (12:05)
- Create another API (ApiOne) (14:10)
- Add JwtBearer to the new api (15:25) (Microsoft.AspNetCore.Authentication.JwtBearer)
- Set Autority (url from our identity server) at the new api (17:30)
- Create Client API Project (ApiTwo) identical to ApiOne (20:30)
- AddHttpClient (to have access to de factory) and create HttpClient Home controller (22:35)
- Add Identity model (24:10)
- Setting client id and secret to the apiclient (27:10)
- Testing the apis (29:30)
