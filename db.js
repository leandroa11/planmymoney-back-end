const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI;

        await mongoose.connect(dbURI);
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
