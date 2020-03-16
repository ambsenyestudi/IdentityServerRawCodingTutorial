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
