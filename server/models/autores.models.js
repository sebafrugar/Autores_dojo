const mongoose = require("mongoose");

const AutorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Se requiere agregar un nombre"],
        minLength: [3, "Nombre minimo de 3 caracteres"]
    },

    lastName : {
        type: String,
        required: [true, "Se requiere agregar un apellido"],
        minLength: [3, "Apellido minimo de 3 caracteres"]
    }
});

const Autor = mongoose.model("Autor",AutorSchema);

module.exports = Autor;