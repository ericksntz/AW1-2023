import express from "express";
import { db } from "../db.js";
import { buscaUsuarios, salvaUsuarios } from "../controllers/userController.js";

const rotas = express.Router();


rotas.get("/", buscaUsuarios)


rotas.post("/", salvaUsuarios)


rotas.put("/:id",(req,res)=> {

    const valores = [
        req.body.nome,
        req.params.id
    ]

    const query = "UPDATE Clientes SET nome = ? WHERE id = ?" //o ponto de interrogação é onde irá cair a variável, qua aparecem em ordem de um vetor
    db.query(query, [...valores], (error) => {
        if(error) return res.json(error)
        return res.json("Usuario alterado com sucesso").status(200)
    } )
})

rotas.delete("/:id",(req,res)=> {

    const valores = [
        req.params.id     
    ]

    const query = "DELETE Clientes FROM  usuarios id = ?" //o ponto de interrogação é onde irá cair a variável, qua aparecem em ordem de um vetor
    db.query(query, [...valores], (error) => {
        if(error) return res.json(error)
        return res.json("Usuario deletado com sucesso").status(200)
    } )
})

export default rotas //O arquivo irá exportar as rotas para o sistema de rotas
