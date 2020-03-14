#Identity server
To user identity server on your project you need to install the nuget package Identity Server 4.
At Startup.cs: 
> - Configure(...) type app.UseIdentityServer() 
> - ConfigureServices(...) type services.AddIdentityServer()