
export const buscaUsuarios = ("/",(req,res)=> {
    const query = "SELECT * FROM Clientes"
    db.query(query, (error, data) => {
        if(error) return res.json(error)
        return res.json(data).status(200)
    } )

})

export const salvaUsuarios = (req,res)=> {
    const query = "INSERT INTO Clientes(`nome`) VALUES (?)" //o ponto de interrogação é onde irá cair a variável, qua aparecem em ordem de um vetor
    db.query(query, [req.body.nome], (error) => {
        if(error) return res.json(error)
        return res.json("Usuario cadastrado com sucesso").status(200)
    } )
}
