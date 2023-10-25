import mysql from "mysql2";

export const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "estudante1",
    password: "123",
    database:"back"
})