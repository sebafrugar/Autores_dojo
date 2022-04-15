const AutorController = require("../controllers/autores.controllers");

module.exports = app => {

    app.get('/api/autores', AutorController.findAllAutores);
    app.get('/api/autor/:id', AutorController.findAutor );
    app.put('/api/autor/update/:id', AutorController.updateAutor);
    app.post('/api/autor/new', AutorController.createAutor);
    app.delete('/api/autor/delete/:id', AutorController.deleteAutor);

};