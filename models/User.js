const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contrasena_hash: { type: String, required: true },
    fecha_registro: { type: Date, default: Date.now },
    ultima_sesion: { type: Date },
    salario: {type: Number, required: true},
    saldo_actual: {type: Number, required: true},
    gastos_obligatorios: { type: Array, default: [] },
    uso_salario: { type: Array, default: [] },
    datos_financieros: { type: Object, default: {} }
});

module.exports = mongoose.model("usuarios", userSchema);
