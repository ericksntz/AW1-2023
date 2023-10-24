import express from "express";
import { db } from "../db.js";

const rotas = express.Router();

rotas.get ("/", (req, res) =>  {
    const query = "SELECT * FROM usuarios";

    db.query(query, (error, data) => {  
        if(error) return res.json (error)
        return res.json (data).status (200)
    })
})
// {res.send ("Você fez um get")})

rotas.post ("/", (req, res) => {
const query = "INSERT INTO usuarios (`nome`) VALUES (?)";
    
db.query(query, [req.body.nome], (error, data) => {  
    if(error) return res.json (error)
    return res.json ("Usuário Cadastrado com Sucesso")
    })
})
//return res.status(200).json(valores) })

rotas.put ("/:id", (req, res) => {
    const query = "UPDATE usuarios SET nome = ? WHERE id = ?";

    const valores = [
    req.body.nome,
    req.params.id
]
db.query(query, [req.body.nome], (error, data) => {  
    if(error) return res.json (error)
    return res.json ("Usuário Alterado com Sucesso")
    })
}) 

rotas.delete ("/:id", (req, res) => {
    const valores = [
    req.params.id
]
return res.status(200).json(req.params.id)
})

export default rotas;