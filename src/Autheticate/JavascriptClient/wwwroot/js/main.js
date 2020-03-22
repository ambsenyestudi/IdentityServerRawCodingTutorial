var config = {
    authority: 'https://localhost:5101/',
    client_id: 'client_id_js',
    redirect_uri: 'https://localhost:44365/home/signin',
    response_type: 'id_token token',
    scope: 'openid ApiOne'
};

var userManager = new Oidc.UserManager(config);
var signIn = function () {
    userManager.signinRedirect().then(result => {
    }).catch(er => {
        console.log('redirect failed:', er);
    });;
}

userManager.getUser().then(user => {
    console.log("user: ", user);
    if (user) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + user.access_token;
        console.log("token for axios in place");
    }
});

var callApi = function () {
    axios.get("https://localhost:5011/api/secret").
        then(res => {
            console.log(res);
        });
}
