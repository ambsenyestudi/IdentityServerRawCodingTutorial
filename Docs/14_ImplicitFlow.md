# Implicit Flow
The original video of Raw Code 
[Implicit Flow](https://www.youtube.com/watch?v=WQM_3Mm1Ewo&list=PLOeFnOV9YBa7dnrjpOG6lMpcyd7Wn7E8V&index=16)

## Notes

-Implicit flow is good for SPA or Mobile aplications, it has no refresh token (0:30)
- Create new Aplication called Javascript Client(1:30)
- add UseStaticFiles() and create a wwwroot folder for your javascript (2:15)
- create controllers folder and home controller (2:30)
- Explain specification on the flow starting with authentication request (3:35)
- Response types of authetication request (3:55)
- Explains the return url disecting it (5:55)
- Explains how to craft the url value without the library (8:53)
- Create sign-in.js (11:25)
- Drag it to home view of the javascript client(11:50)
- Edit solution startup project multiple properties leaving just identity api and javascript client (12:10)
- Starts editing sign-in.js (14:20)
- Code for de home index razor view (14:43)
- AddRazorRuntimeCompilation at startup configureservices from nuget(Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation) (15:30)
- Create return url on sign-in.js (17:10)
- Redirect to url from javascript (27:15)
- Testing redirect url (28:20)
- Configure the client with identity server at the InmemoryConfiguration(28:50)
- Allow access_token via browser (30:30)
- At identity api set breakpoint when redirecting to get the error (it line brake char of javascript)(31:00)
- All parameters start with ? and only the first must so chage the rest to &(33:56)
- Disable consent screen (35:20)
