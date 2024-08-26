import express from 'express';
import pool from "./db.js";

const app = express();
const port = 3001;
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("hello");
})

app.post("/create-user", (req, res) => {
    let data = req.body;
    pool.getConnection((err, con) => {
        if (err) throw err;
        let query = "INSERT INTO users (name, age) VALUES (?, ?)";
        let values = [data.name, data.age];

        con.query(query, values, (error, result) => {
            con.release();
            res.status(200).json({ message: "success", statu: true });
        })
    })
})
app.get("/user", (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("Select * from users", (err, result) => {
            con.release();
            if (err) throw err;
            res.status(200).json(result);
        });
    })
})

app.listen(port, () => {
    console.log('http://127.0.0.1:3001');
})
