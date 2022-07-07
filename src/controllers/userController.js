import joi from "joi"
import db from "./mongo.js";
import {v4 as uuid} from 'uuid'
import bcryptjs from "bcryptjs";

export async function cadastro(req, res){

    const usuario = req.body

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const usuarioSchema = joi.object({
        nome: joi.string().required(),
        email: joi.string().pattern(regexEmail).required(),
        senha: joi.string().required(),
        confirmacaoSenha: joi.string().required()
      });

    const {error} = usuarioSchema.validate(usuario)

    if(error){
        console.log(error.details)
        res.send("Ops! Parece que algo de errado na validação de dados").status(400)
        return
    }

    const {nome, email, senha} = usuario
    try{
        console.log(email)
        const usuarioExiste = await db.collection('usuario').findOne({email: email})
console.log(usuarioExiste)

        if(usuarioExiste!==null){
            res.send("Usuário já existente").status(409)
            return
        }
        const senhaCrypt = bcryptjs.hashSync(senha, 10)
        console.log("2")
        await db.collection('usuario').insertOne({nome, email, senhaCrypt})
        console.log("3")
        res.send("Cadastro efetuado com sucesso.").status(201)
    }catch{
        res.send("O seu cadastro não foi efetuado, algo deu errado.Por favor, tente novamente.").status(400)
   
    }
}

export async function login(req,res){

    const loginUsuario = req.body

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    const loginSchema = joi.object({
        email: joi.string().pattern(regexEmail).required(),
        senha: joi.string().required(),
      });

    const {error} = loginSchema.validate(loginUsuario)    

    if(error){
        console.log(error.details)
        res.send("Ops! Email ou senha invalido").status(400)
        return
    }
    const {email, senha } = loginUsuario
    try{
        const usuario = await db.collection('usuario').findOne({email: email})

        if(usuario===null){
            res.sendStatus(401)
            return
        }
        const {senhaCrypt, nome} =  usuario
        
        const validacaoSenha = bcryptjs.compareSync(senha, senhaCrypt)

        if(!validacaoSenha){
            res.sendStatus(401)
            return
        }

        const token = uuid();

        const atualizacaoUsuario = await db.collection('usuarios').updateOne({ email: email }, { $set: { token: token } })
        
        const infoUsuario = {
            token: token,
            nome:nome
        }
        res.send(infoUsuario)
     
    }catch{
        res.sendStatus(400)
    }
 

}

// {
//     "nome": "roberta",
//     "email": "robertad@gmail.com",
//     "senha": "1234",
//     "confirmacaoSenha": "1234"
// }