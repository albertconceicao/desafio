const express=require('express');

const PORT = 3001;
const Tables = require('./db/tables');
const pool = require('./db/connection');

pool.getConnection((err, connection) => {
    if(err) {
        console.log(err);
    } else {
        console.log('conectado com sucesso');
        connection.release();

        Tables.init(pool);
        const app = express();
        app.listen(PORT, () => console.log(`Server running on ${PORT} port`));
    }
})


