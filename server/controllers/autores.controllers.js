const Autor = require("../models/autores.models");


module.exports.findAllAutores = (req, res) => {
    Autor.find()
        .then((allAutors) => res.json({ autores: allAutors }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.createAutor = (req , res) => {
    Autor.create(req.body)
        .then((nuevoAutor) => res.json({ autor: nuevoAutor }))
        .catch(err => res.status(400).json(err));
}

module.exports.findAutor = (req, res) => {
    Autor.findOne({_id: req.params.id})
        .then((autor)=>res.json({autor:autor}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.updateAutor = (req,res)=>{
    Autor.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((autor)=>res.json({autor:autor}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.deleteAutor = (req,res)=>{
    Autor.deleteOne({_id: req.params.id})
        .then((result)=>res.json({resultado:result}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}