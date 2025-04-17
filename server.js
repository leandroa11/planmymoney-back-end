require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());

app.use('/api/usuarios', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});