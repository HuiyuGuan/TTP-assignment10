const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "12345", //change it to your own password
    database: "postgres_store_db",
    host : "localhost",
    post : 5432
}
);

module.exports = pool;