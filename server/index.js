require ('dotenv').config(); // to use the .env file
const express = require('express'); // to create the server
const sequelize = require('./db'); // to connect to the database
const PORT = process.env.PORT || 8080;
const models = require('./models/models');
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());

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


