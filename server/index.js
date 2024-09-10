const router = require('./routes/index');
require ('dotenv').config(); // to use the .env file
const express = require('express'); // to create the server
const sequelize = require('./db'); // to connect to the database
const PORT = process.env.PORT || 8080;
const models = require('./models/models');
const cors = require ('cors');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);
//When you call app.use() in Express.js, you are essentially registering middleware functions with the application. Middleware functions are functions that have access to the request (req), response (res), and the next middleware function in the application’s request-response cycle. They are typically used to modify the request or response objects, end the request-response cycle, or call the next middleware in line.
//	•	When you use app.use() and pass a middleware function like cors() or express.json(), you are adding that function to the middleware stack of the Express application.
//	•	This stack is processed sequentially whenever a request is made to the server. Express moves through the stack of middleware functions in the order they were registered until it reaches a route handler or another middleware that ends the cycle.
app.get('/', (req,res) => {
    res.status(200).json({message: 'Get repsonse 200 - PASS'})
})

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen (PORT, () => {
            console.log(`Server is running on PORT:${PORT}`)
        });
        console.log('Connection  has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start();


