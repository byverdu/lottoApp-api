## API server for lottoApp

[frontEnd repo](https://github.com/byverdu/lottoApp-frontEnd)

[backEnd repo](https://github.com/byverdu/lottoApp-backEnd)

```json
# start project, make sure mongo is running
"scripts": {
    "start": "babel-node server.js",
    "nodemon": "nodemon -e js,json,jsx --exec babel-node server",
    "test": "mocha --watch --compilers js:babel-core/register"
  }
```
