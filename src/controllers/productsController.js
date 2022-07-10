import { ObjectId } from "mongodb";
import arrayProdutos from "../bancoProdutos/arrayProdutos.js";
import db from "./mongo.js";

export async function gerarProdutos(req, res) {
    console.log("entrou")
    try {
        const listaProdutos = await db.collection("produtos").find().toArray();

        if (listaProdutos.length === 0) {

            const adicionarProdutos = await db.collection("produtos").insertMany(arrayProdutos)
           listaProdutos = await db.collection("produtos").find().toArray();

        }
console.log("antes da dividao")
        const produtos = await db.collection("produtos").find().toArray()

        res.send(produtos)
    }catch{
        res.sendStatus(401)
    }

}
export async function gerarProdutoEspecifico(req, res) {


    const idProduto = res.locals.idProduto;
    
        console.log(idProduto)

   
    try {
        const listaProdutos = await db.collection("produtos").find().toArray();

        if (listaProdutos.length === 0) {

            const adicionarProdutos = await db.collection("produtos").insertMany(arrayProdutos)
           listaProdutos = await db.collection("produtos").find().toArray();

        }
console.log("antes da dividao")
        const produto = await db.collection("produtos").find({_id: ObjectId(idProduto)}).toArray()
console.log(produto)
        res.send(produto )
    }catch{
        res.sendStatus(401)
    }

}

export async function gerarVinhos(req, res) {
    console.log("entrou")
    try {
        const listaProdutos = await db.collection("produtos").find().toArray();

        if (listaProdutos.length === 0) {

            const adicionarProdutos = await db.collection("produtos").insertMany(arrayProdutos)
           listaProdutos = await db.collection("produtos").find().toArray();

        }
console.log("antes da dividao")
        const vinho = await db.collection("produtos").find({categoria:"vinho"}).toArray()

        res.send(vinho)
    }catch{
        res.sendStatus(401)
    }

}

export async function gerarCervejas(req, res) {
    console.log("entrou")

    try {
        const listaProdutos = await db.collection("produtos").find().toArray();

        if (listaProdutos.length === 0) {

            const adicionarProdutos = await db.collection("produtos").insertMany(arrayProdutos)
           listaProdutos = await db.collection("produtos").find().toArray();

        }
console.log("antes da dividao")
        const cerveja = await db.collection("produtos").find({categoria:"cerveja"}).toArray()

        res.send(cerveja)
    }catch{
        res.sendStatus(401)
    }
}

export async function gerarWhiskys(req, res) {
    console.log("entrou")

    try {
        const listaProdutos = await db.collection("produtos").find().toArray();

        if (listaProdutos.length === 0) {

            const adicionarProdutos = await db.collection("produtos").insertMany(arrayProdutos)
           listaProdutos = await db.collection("produtos").find().toArray();

        }
console.log("antes da dividao")
        const whisky = await db.collection("produtos").find({categoria:"whisky"}).toArray()

        res.send(whisky)
    }catch{
        res.sendStatus(401)
    }
}

export async function gerarGins(req, res) {
    console.log("entrou")

    try {
        const listaProdutos = await db.collection("produtos").find().toArray();

        if (listaProdutos.length === 0) {

            const adicionarProdutos = await db.collection("produtos").insertMany(arrayProdutos)
           listaProdutos = await db.collection("produtos").find().toArray();

        }
console.log("antes da dividao")
        const gin = await db.collection("produtos").find({categoria:"gin"}).toArray()

        res.send(gin)
    }catch{
        res.sendStatus(401)
    }
}