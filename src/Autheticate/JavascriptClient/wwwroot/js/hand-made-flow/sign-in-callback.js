
// this is the result of ASP.NET Core 3 - IdentityServer4 - Ep.14 Implicit Flow
var extractTokens = function (address) {
    var returnValue = address.split('#')[1];
    var values = returnValue.split('&');

    for (var i = 0; i < values.length; i++) {

        var v = values[i];

        var kvPair = v.split('=');
        //localStorage is how javascript storage on your client i.e. your webBrowser
        localStorage.setItem(kvPair[0], kvPair[1]);
    }
    window.location.href = '/home/index';
}
extractTokens(window.location.href);

//ASP.NET Core 3 - IdentityServer4 - Ep.14 Implicit Flow
var callbackUrl = "https://localhost:44365/home/signin#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjljUm1jbW85aURZM2hwbEV4R0oyS1EiLCJ0eXAiOiJKV1QifQ.eyJuYmYiOjE1ODQ4Njk2NjYsImV4cCI6MTU4NDg2OTk2NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTEwMSIsImF1ZCI6ImNsaWVudF9pZF9qcyIsIm5vbmNlIjoiNjM3MjA0NjQ4NDc4MTg4MzMwLlpqRTJOV00zT1RrdFl6UTFaaTAwTW1KbExUaGhaakF0T1RnNU16ZG1ObVUyWWpoaFlXTXdORFZpT1RFdFlUSTFOaTAwWTJKaExXSTNaVFV0T0RVMk16SXdNakkyTnpoayIsImlhdCI6MTU4NDg2OTY2NiwiYXRfaGFzaCI6IlRqdXB4NUNDMW1BX1czSUpmUHBVM0EiLCJzX2hhc2giOiJZVE1BdTFiUDhtWUh4blE2a2VPRDZ3Iiwic2lkIjoidnBZNDJjWUdUbVRRX2hXRTNBczFudyIsInN1YiI6ImQ4NjQxZTExLWM4MzctNDk0ZC1hMmI1LTA3ODQzZWQ5ZWM0NyIsImF1dGhfdGltZSI6MTU4NDg2OTY2NiwiaWRwIjoibG9jYWwiLCJhbXIiOlsicHdkIl19.nzkRsvE8dqsBfvKVqgZd04PrP6ixqhtLkfyowAIrYtwn2q9vtStmF20-aRUpojNxMGtaHT0wjyrykaY-pxKIktmix5pFKEHnScBvblx7zSMDflcAO3Tk4EQAVAIM2c5h72ViLp_Kil9isDlMNFvDmGFvjBYgDXaTtteStxGm19_9_0by6owJ3btmCnK_XW0IBrqx7GBHk-CysS7O9VXSCdk5zCciAdrw2rf8XX9HQd_CcyvwqIhTSQZwTZ048kql9Uaq6mHt9nivgsCbyP4VM0juKfjE9d9XB8wMPq854z93mvIC1awSXZ1wRaH52UNAMg_ktl0euj4UOIhay6WWUQ&access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjljUm1jbW85aURZM2hwbEV4R0oyS1EiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE1ODQ4Njk2NjYsImV4cCI6MTU4NDg3MzI2NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTEwMSIsImF1ZCI6IkFwaU9uZSIsImNsaWVudF9pZCI6ImNsaWVudF9pZF9qcyIsInN1YiI6ImQ4NjQxZTExLWM4MzctNDk0ZC1hMmI1LTA3ODQzZWQ5ZWM0NyIsImF1dGhfdGltZSI6MTU4NDg2OTY2NiwiaWRwIjoibG9jYWwiLCJzY29wZSI6WyJvcGVuaWQiLCJBcGlPbmUiXSwiYW1yIjpbInB3ZCJdfQ.qgHDDaqq-PZKza9Ciw2RSCLCct-IEgUQo7DIV4BVpDh5gez0V3PaLiM9uGB6vBji3yDUdh2w5zbEWZ1V9qS1hOi2CjcpmYVL9ELJZKX5SvV8WZcM04hQ9Byx03cjSwuc_tieATOSPGB8FGOLSS-anAi6nqeEZg1Af970p63BufcaLoczm8DQitaRisObzgeZMjT8OvUH0Fw1rdLobp5tt74nRdopBjca8aEtyWoxiBUktO9IZBa4rTk47eloQhJyLZ1ba4tFIkk1p0v6CHJ2hAC6cxJHHLTrmalu_7JYi1aSFe4X-ri08xPdnrCVVPdaXsTZTxFMdPpTPu-o4mL1Fw&token_type=Bearer&expires_in=3600&scope=openid%20ApiOne&state=CfDJ8PROljG0if5KoTqtclaM26Vqvtg22mBODng92QQOqkUNTf1ttYPWA3jbKZwBMdeLnp9svVUNUpdfcklSKeTwxZ3IXM-5yQhJOlhNAYsu7lbjbLgV1qdAqi90hdx7siRTWjFr1NwA9FRs1fi9ZD5rscvS2sRXfyD4dqGtmV7XnbffwXGr3oSvoLw3OH-5HsTW6g5sJu76iJjuH82lWiHXmsONcg90tOqAl3ZR7NiMiqoVtpqJ937RC_tMp24W_SHMbRTfhaYTJ38-BqRxT70SHZCBDIri02bWL1-drq2tj5UFUhN6GhW-SXXj3Tf3ENtgYL6imFaQo-6fpAm3AIxRBKVpNl-Dhkgk0PDV_zEu16Gq1o_nw-9eZU75jmxCIDrO7Q&session_state=Dn0Ght5NqLv2DNmNToYsoSimlrX9jMJCaBLY1GJeGUc.pwonsYYsfAJRkM-ERkLZ2Q";
var extractTokenFromStaticCallbackUrl = function () {
    var returnValue = callbackUrl.split('#')[1];
    var values = returnValue.split('&');

    for (var i = 0; i < values.length; i++) {

        var v = values[i];

        var kvPair = v.split('=');
        //localStorage is how javascript storage on your client i.e. your webBrowser
        localStorage.setItem(kvPair[0], kvPair[1]);

    }
    //console.log(returnValue);
    //console.log(values);
}