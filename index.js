const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerdocs.json');
const db = require('./config/db.config');

/** Setting up environment variable */
const port = process.env.PORT || 8080;
const app = express();

/** set up middlewares */
app.use(function(req, res, next) {
    res.header('Origin', false);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** initializing swagger environment */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/** set up routes {API Endpoints} */
require('./models/user');
app.use(require('./routes'));

/** starting up the server */
db.sync().then(() => {
    console.log('Database Connection established');
    app.emit('connected');
    app.listen(port, () => {
        console.log('Server running on port ' + port);
    });
})
.catch(console.log);

module.exports = app;