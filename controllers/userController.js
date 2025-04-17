const User = require('../models/User');
const CryptoJS = require('crypto-js');

const SECRET_KEY = process.env.SECRET_KEY;

const descifrarContrasena = (contrasena_hash) => {
    const bytes = CryptoJS.AES.decrypt(contrasena_hash, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

const loginUser = async (req, res) => {
    const { correo, contrasena_hash } = req.body;
    console.log(correo);
    console.log(contrasena_hash);

    try {
        const usuario = await User.findOne({ correo });
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        const contrasena_descifrada = descifrarContrasena(contrasena_hash);
        const contrasena_usuario_descifrada = descifrarContrasena(usuario.contrasena_hash);

        if (contrasena_descifrada !== contrasena_usuario_descifrada) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        res.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            usuario: usuario
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el inicio de sesión', error });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};

const createUser = async (req, res) => {
    const { _id, nombre, correo, contrasena_hash } = req.body;

    try {
        const usuarioExistente = await User.findOne({ correo });
        if (usuarioExistente) {
            return res.status(409).json({ mensaje: 'El correo ya está registrado' });
        }

        const nuevoUsuario = new User({
            _id: _id,
            nombre,
            correo,
            contrasena_hash,
            fecha_registro: new Date().toISOString(),
            ultima_sesion: null,
            salario,
            saldo_actual,
            gastos_obligatorios: [],
            uso_salario: [],
            datos_financieros: {},
        });

        console.log(nuevoUsuario);

        await nuevoUsuario.save();

        res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al registrar el usuario', error });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const camposActualizados = req.body;
    console.log(id);
    console.log(camposActualizados);

    try {
        const usuarioActualizado = await User.findByIdAndUpdate(
            id,
            { $set: camposActualizados },
            { new: true, runValidators: true }
        );

        if (!usuarioActualizado) {
            return res.status(404).send({ mensaje: 'Usuario no encontrado' });
        }

        res.send({ mensaje: 'Usuario actualizado con éxito', usuario: usuarioActualizado });
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: 'Error al actualizar usuario', error: error.message });
    }
}

module.exports = {
    getUsers,
    getUserById,
    loginUser,
    createUser,
    updateUser
};
