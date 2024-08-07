const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnect");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`Server started running on port: ${PORT} | Server start time: ${new Date()}`);
});