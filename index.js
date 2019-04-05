const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerdocs.json');
const db = require('./config/db.config');
const cors = require('cors');
const routes = require('./routes/index');
const ImmunizationController = require('./controllers/immunization.controller');

/** Setting up environment variable */
const port = process.env.PORT || 8080;
const app = express();

/** set up middlewares */
app.options('*', cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** initializing swagger environment */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/** set up routes {API Endpoints} */
app.post('/api/v1/immunization/child-registration', (req, res, next) => {
    ImmunizationController.registerChild(req, res, next);
});

app.get('/api/v1/immunization/all-records', (req, res, next) => {
    ImmunizationController.getAllRecord(req, res, next);
});

app.post('/api/v1/immunization/child-profile', (req, res, next) => {
    ImmunizationController.getChildProfile(req, res, next);
});

app.post('/api/v1/immunization/search-records', (req, res, next) => {
    ImmunizationController.searchRecords(req, res, next);
});

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