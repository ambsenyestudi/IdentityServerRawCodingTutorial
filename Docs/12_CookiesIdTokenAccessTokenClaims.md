# Cookies, Id Token, Access Token, Claims
Notes on this [video](https://www.youtube.com/watch?v=bcfThLdEcOM&list=PLOeFnOV9YBa7dnrjpOG6lMpcyd7Wn7E8V&index=14)

## My notes
- Intro to cookies (0:30)
- Extract all token (access_token, id_token, refresh_token) at secret controller (7:55)
- Test the entire thing(10:30)
- reviews identity token claims 
- reviews identity token claims (16:00)
- include user claims in id token (20:35)
- at user seeding on identity server api add a claim (22:15)
- Add scope to identity resources api clients (26:15)
- Add new claim to client allowed scopes (InMemoryConfiguration client_id_mvc)
- Configure scopes at AddOpenIdConnect on MVCClient Startup (28:00)
- Keep our token small and get user claims with config.GetClaimsFromUserInfoEndpoint(31:45) 
- Explains where claims are placed on each token (33:10)
> For me the claim apears at the id token
- How claims are mapped (34:00)
- Clear the scope at MVCClient statup(38:30)
- Hit api one from MVCClient (40:30)
- Add scope access to api one at mvcclient startup (44:45)
- Adding breakpoint at ApiOne Secret we have no claims about the user, all is related to the authentication (45:45)
- Add another cookie, rc.api.grandma at Program.cs (46:45)
- Add the new claim to the ApiResoure ApiTwo constructor of the api resource (47:35)
- Test the new claim On ApiOne(48:30)
- Change the whole to apiTwo, claim scope and so on(49:30)
