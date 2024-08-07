const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoString = process.env.mongoDB;
        if (!mongoString) {
            throw new Error("MongoDB connection string is not defined in environment variables.");
        }
        await mongoose.connect(mongoString);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;