# RefreshToken
he original video of Raw Code [Refresh Token](https://www.youtube.com/watch?v=KlgrvIUCQ8c&list=PLOeFnOV9YBa7dnrjpOG6lMpcyd7Wn7E8V&index=15
)

## Notes
- Explains the specifiction of the Refresh Token(0:35)
- Add offline access scope At MVCClient Starupt (1:15)
- Modify Identity Server Api InMemoryConfig, Allow ofline access (1:30)
- Get discovery document for our refresh tocken method at MVCClient (4:20)
- Test RefreshAccessToken method, tells us invalid client, clinet_mvc_secret was wrong (11:00)
- Fixing it to clinet_secret_mvc we have the identity token and the access token (12:30)
- Copy paste all tokens from secret method to Refresh token method (13:10)
- Changes Client Cookie to Cookie and check all tokens have changed (14:30)
