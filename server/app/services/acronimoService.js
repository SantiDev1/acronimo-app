const Acronimo = require("../models/acronimoModel");

class AcronimoService {
    static insert(inicial, significado, callback) {
        Acronimo.insert(inicial, significado, callback);
    }

    static getAll(callback) {
        Acronimo.getAll(callback);
    }
}

module.exports = AcronimoService;
