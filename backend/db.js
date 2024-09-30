require('dotenv').config({ path: './.env' });  // Explicitly load the .env file

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const mongoURI = process.env.MONGODB_URI;

// console.log('Mongo URI:', mongoURI);  // Debugging step

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);  // Use the correct URI
        console.log('Connected To Mongo Successfully');
    } catch (error) {
        console.error('Error connecting to Mongo:', error);
    }
};
// console.log('Mongo URI:', process.env.MONGODB_URI);  // Should log your MongoDB URI
// console.log('Test ENV:', process.env.TEST_ENV);      // Should log 'HelloWorld'


module.exports = connectToMongo;
