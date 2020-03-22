# 16 Persistance Claims Refreshing On Implicit Flow

The original video of [Persistance Claims Refreshing On Implicit Flow](https://www.youtube.com/watch?v=-eQxqboLDz0&list=PLOeFnOV9YBa7dnrjpOG6lMpcyd7Wn7E8V&index=18)

## Notes

- Take look at persisting to storage the user (0:30)
- User local sotrage(1:30)
- user at the profile sections has its claims (4:00)
- Allow rc.scope  and Api Two scopes at inMemoryConfiguration for javascript client (5:30)
- Add  rc.scope  and Api Two scopes to the config of main.js (6:30)
- Now we get the new claims at ApiOne from the token and the big cookie at the user profile (7:25)
- Axios interceptor to refresh token  at main.js (11:35)
- Set your access-token life to be 1 second for testing a Inmemory configuration it will take a minute though (14:15)
- watch for 401 at the interceptor  (16:00)
- user manager signinsilent at the interceptor and log the result (20:00)
- Se the new access_token at the axious header (23:00)
