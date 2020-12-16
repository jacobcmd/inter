const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    primer_apellido: {
        type: String,
        required: [true, 'El primer apellido es necesario']
    },
    segundo_apellido: {
        type: String,
        required: [false, 'El segundo apellido no es necesario']
    },
    edad: {
        type: Number,
        required: [true, 'La edad es necesaria']
    },
    curp: {
        type: String,
        unique: true,
        required: [true, 'La curp es necesaria']
    },
    telefono: {
        type: Number
    },
    mail: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);