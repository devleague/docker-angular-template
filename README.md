Use `ng serve` to start the react server

`docker-compose up` to start the backend server along with postgres and redis.

```
"nodemonConfig": {
  "watch": ["server"]
},
```   
The `nodemonConfig` tells nodemon to only watch the server dir.

The `proxy.conf.json` file setups the proxy for the ng server to redirect all traffic on `/api` to go to the backend docker instance instead.

The way the knexfile is setup, there is a single configuration shared by both development and production.

Migrations and Seeds are now run automatically on launching the express docker container via the deploy-*.js files. It also launches the server with node in production mode or launches nodemon watching all files in development mode. 
