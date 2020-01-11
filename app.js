const express = require('express');
const bodyParser = require('body-parser');
const mentor = require('./routes/mentor.route'); 
const app = express();app.use('/mentors', mentor);
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://Shiv@m99@mentorsapp-fiw4g.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));