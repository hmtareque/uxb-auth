const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const express = require('express');
const app = express();

const swaggerJsDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// https://swagger.io/specification/
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API name',
            description: 'description',
            contact: {
                name: 'Hasan Tareque',
                email: 'hmtareque@gmail.com'
            }
        },
        servers: ['http://localhost:3001']
    },
    apis: ["app.js"]
}

const swaggerDocs = swaggerJsDocs(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const routes = require('./routes/role-routes');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });



// Error handling 
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

// Routes
app.use(routes);
//app.use(roleRoutes);
//app.use(userRoutes);

//mongodb+srv://hmtareque:hasan076@cluster0-mhyrp.mongodb.net/uxb_directory?retryWrites=true&w=majority

mongoose.connect('mongodb://admin:hasan076@localhost:27017/auth', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(result => {
    console.log('server running ...');
    app.listen(3001);
}).catch(err => {
    console.log(err);
});

