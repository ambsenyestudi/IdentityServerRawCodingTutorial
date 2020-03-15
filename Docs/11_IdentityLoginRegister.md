# Identity Login and Register

-Add de appdb context to your application (1:20)
>Remember to install the following nugets:
> - Microsoft.EntityFrameworkCore
> - Microsoft.EntityFrameworkCore.InMemory
> - Microsoft.EntityFrameworkCore
> - Microsoft.AspNetCore.Identity.EntityFrameworkCore
- Set Login path(2:30)
- Add auth controller (2:50)
- Seed some login information at Program.cs (4:05)
- Create Login view (9:10)
- Try to login (Error multilple endpoint, needs specify get and post)(10:30)
- Looks at return url parameter on the account url (11:20)
- Capture return url at Login (Get) and add to our viewmodel (12:10)
> Beware on *Visual Studio* when *auto implementing property*, *it will implment an internal set* and you **will go mad getting a null return url** at the post method
- Create hidden input at login view (13:00)
- Sign in user through Signin manager (14:40)
- Test signin (17:20)
- Implement sub claim nuget (IdentityServer4.AspNetIdentity) (18:30)
- Disable consent screen for the moment at client on InmemoryConfiguration (21:25)
- Implement registration screen (22:30)
