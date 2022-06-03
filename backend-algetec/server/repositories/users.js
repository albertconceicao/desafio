const query = require('../db/query');

class User {
    
    createUser(returnForm) {
        const sql = 'INSERT INTO users SET ?'

        return query(sql, returnForm);
    }
}