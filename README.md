# Notes

- Export API platform openapi / swagger json : 
- - `php bin/console api:openapi:export --output=swagger_docs.json` OpenApi - latest <--
- - `php bin/console api:swagger:export > swagger_specification.json` Swagger - v2
- Install node dependency
- - https://www.npmjs.com/package/swagger-ui-express (swagger-ui-express)
- - `npm i swagger-ui-express`
- - Add `app.js`
- - Run script : `nodemon app.js` / `node app.js`
- URL : http://127.0.0.1:5000/
- https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/installation.md (HTML serve swagger UI)

**app.js**

```js
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = 5000;

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
```
