const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerdocs.json');
const db = require('./config/db.config');

/** Setting up environment variable */
const port = process.env.PORT || 3000;
const app = express();

/** initializing swagger environment */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/** set up middlewares */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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