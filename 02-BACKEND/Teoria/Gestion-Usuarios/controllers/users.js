const fs = require('fs')
const path = require('path')


const usuariosPath = path.join(__dirname, '../data/usuarios.json')


const leerUsarios =()=>{
    const data = fs.readFileSync(usuariosPath, 'utf-8')
    return JSON.parse(data)
}

const listarUsarios =(req, res)=>{
    const users = leerUsarios()
    res.json(users)
}

const listarUsuario =(req, res)=>{
    const id = +req.params.id
    const users = leerUsarios()
    const user = users.find((user) => {
        return user.id === id
    })
    if(user) return res.json(user)
    res.status(404)
    res.send('Usuario no encontrado')
}

module.exports = {leerUsarios, listarUsarios, listarUsuario}