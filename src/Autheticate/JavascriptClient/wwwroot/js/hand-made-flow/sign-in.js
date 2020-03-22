var createState = function () {
    return "CfDJ8PROljG0if5KoTqtclaM26Vqvtg22mBODng92QQOqkUNTf1ttYPWA3jbKZwBMdeLnp9svVUNUpdfcklSKeTwxZ3IXM-5yQhJOlhNAYsu7lbjbLgV1qdAqi90hdx7siRTWjFr1NwA9FRs1fi9ZD5rscvS2sRXfyD4dqGtmV7XnbffwXGr3oSvoLw3OH-5HsTW6g5sJu76iJjuH82lWiHXmsONcg90tOqAl3ZR7NiMiqoVtpqJ937RC_tMp24W_SHMbRTfhaYTJ38-BqRxT70SHZCBDIri02bWL1-drq2tj5UFUhN6GhW-SXXj3Tf3ENtgYL6imFaQo-6fpAm3AIxRBKVpNl-Dhkgk0PDV_zEu16Gq1o_nw-9eZU75jmxCIDrO7Q&";
}
var createNonce = function () {
    return "637204648478188330.ZjE2NWM3OTktYzQ1Zi00MmJlLThhZjAtOTg5MzdmNmU2YjhhYWMwNDViOTEtYTI1Ni00Y2JhLWI3ZTUtODU2MzIwMjI2Nzhk";
}

//watch redirect_uri not redirect_url (param of the returnUrl var), watch for spaces
//Disected response form our mvc client
/*
"ReturnUrl=/connect/authorize/callback?client_id=client_id_mvc&" +
"redirect_uri=https%253A%252F%252Flocalhost%253A44392%252Fsignin-oidc&" +
"response_type=code&" +
"scope=openid%2520rc.scope%2520ApiOne%2520ApiTwo%2520offline_access&" +
"code_challenge=5RXoyfkRiSPqHQy8n2WRrk81LWxJl5MsYyjEvnWDf5M&"+
"code_challenge_method=S256&" +
"response_mode=form_post&" +
"nonce=637204648478188330.ZjE2NWM3OTktYzQ1Zi00MmJlLThhZjAtOTg5MzdmNmU2YjhhYWMwNDViOTEtYTI1Ni00Y2JhLWI3ZTUtODU2MzIwMjI2Nzhk&" +
"state=CfDJ8PROljG0if5KoTqtclaM26Vqvtg22mBODng92QQOqkUNTf1ttYPWA3jbKZwBMdeLnp9svVUNUpdfcklSKeTwxZ3IXM-5yQhJOlhNAYsu7lbjbLgV1qdAqi90hdx7siRTWjFr1NwA9FRs1fi9ZD5rscvS2sRXfyD4dqGtmV7XnbffwXGr3oSvoLw3OH-5HsTW6g5sJu76iJjuH82lWiHXmsONcg90tOqAl3ZR7NiMiqoVtpqJ937RC_tMp24W_SHMbRTfhaYTJ38-BqRxT70SHZCBDIri02bWL1-drq2tj5UFUhN6GhW-SXXj3Tf3ENtgYL6imFaQo-6fpAm3AIxRBKVpNl-Dhkgk0PDV_zEu16Gq1o_nw-9eZU75jmxCIDrO7Q&" +
"x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=5.5.0.0"
*/
//our wrong return url during the process
/*
"ReturnUrl=/connect/authorize/callback?clientId=clinent_id_js&" +
"redirect_uri=https%253A%252F%252Flocalhost%253A44365%252FSignIn&" +
"response_type=id_token%2520token&" +
"scope=openid%2520ApiOne&" +
"nonce=NonceValueasdbnlfkjqpweioruz.xcaxqeopr%C3%B1dklabxmandubnm&" +
"state=SessionValieMakeABitLongerasd%C3%B1lfkjqpweioruzxcqeopr%C3%B1dkl-bmanduwert"
*/
//our finally correcturl
//"/connect/authorize/callback?client_id=client_id_js&redirect_uri=https%3A%2F%2Flocalhost%3A44365%2Fhome%2Fsignin&response_type=id_token%20token&scope=openid%20ApiOne&nonce=637204648478188330.ZjE2NWM3OTktYzQ1Zi00MmJlLThhZjAtOTg5MzdmNmU2YjhhYWMwNDViOTEtYTI1Ni00Y2JhLWI3ZTUtODU2MzIwMjI2Nzhk&state=CfDJ8PROljG0if5KoTqtclaM26Vqvtg22mBODng92QQOqkUNTf1ttYPWA3jbKZwBMdeLnp9svVUNUpdfcklSKeTwxZ3IXM-5yQhJOlhNAYsu7lbjbLgV1qdAqi90hdx7siRTWjFr1NwA9FRs1fi9ZD5rscvS2sRXfyD4dqGtmV7XnbffwXGr3oSvoLw3OH-5HsTW6g5sJu76iJjuH82lWiHXmsONcg90tOqAl3ZR7NiMiqoVtpqJ937RC_tMp24W_SHMbRTfhaYTJ38-BqRxT70SHZCBDIri02bWL1-drq2tj5UFUhN6GhW-SXXj3Tf3ENtgYL6imFaQo-6fpAm3AIxRBKVpNl-Dhkgk0PDV_zEu16Gq1o_nw-9eZU75jmxCIDrO7Q&"
var signIn = function () {
    var thisClientUrl = 'https://localhost:44365';
    var redirectUri = thisClientUrl+'/home/signin';
    var responseType = "id_token token";
    var scope = "openid ApiOne";
    var authZUrl = "/connect/authorize/callback" +
        "?client_id=client_id_js" +
        "&redirect_uri=" + encodeURIComponent(redirectUri) +
        "&response_type=" + encodeURIComponent(responseType) +
        "&scope=" + encodeURIComponent(scope) +
        "&nonce=" + createNonce() +
        "&state=" + createState();

    var returnUrl = encodeURIComponent(authZUrl);
    /*
    console.log(authZUrl);
    console.log(returnUrl);
    */

    //send to identityserver
    var identityServerUrl = 'https://localhost:5101';
    window.location.href = `${identityServerUrl}/Auth/Login?ReturnUrl=${returnUrl}`;
    
}