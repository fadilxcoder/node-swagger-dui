const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_docs.json');
const port = 5000;

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});