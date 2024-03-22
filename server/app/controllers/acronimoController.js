const request = require('request');
const AcronimoService = require("../services/acronimoService");

class AcronimoController {
    static search(req, res) {
        const searchTerm = req.query.term;

        request({
            url: 'https://www.nactem.ac.uk/software/acromine/dictionary.py',
            qs: { sf: searchTerm }
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.status(response.statusCode).send(error);
            }
        });
    }

    static create(req, res) {
        const inicial = req.body.inicial;
        const significado = req.body.significado;

        AcronimoService.insert(inicial, significado, (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error al registrar el acrónimo");
            } else {
                console.log("Acronimo registrado con exito");
                res.send("Acronimo registrado con exito");
            }
        });
    }

    static getData(req, res) {
        AcronimoService.getAll((err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send("Error al obtener los acrónimos");
            } else {
                res.send(result);
            }
        });
    }
}

module.exports = AcronimoController;
