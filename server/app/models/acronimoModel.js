const db = require("../config/database");

class Acronimo {
    static insert(inicial, significado, callback) {
        db.query('INSERT INTO acronimos(inicial, significados) VALUES (?, ?)', [inicial, significado], callback);
    }

    static getAll(callback) {
        db.query('SELECT * FROM acronimos', callback);
    }
}

module.exports = Acronimo;
