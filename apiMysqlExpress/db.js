import mysql from 'mysql';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "students",
    connectionLimit: 10 , // Set the maximum number of connections in the pool
    connectTimeout: 60000 //60 seconds later connectionis closed
});

export default pool;
