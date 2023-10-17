import express from "express";

const rotas = express.Router();

rotas.get ("/", (req, res) => {res.send ("Você fez um get")})

rotas.post ("/", (req, res) => {
const valores = [
    req.body.nome,
    req.body.email
]

return res.status(200).json(valores)
})

rotas.put ("/:id", (req, res) => {
    const valores = [
    req.body.nome,
    req.params.id
]

return res.status(200).json(valores)
}) 

rotas.delete ("/:id", (req, res) => {
    const valores = [
    req.params.id
]
return res.status(200).json(req.params.id)
})

export default rotas;