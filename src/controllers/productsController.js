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
    } catch {
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
        const produto = await db.collection("produtos").find({ _id: ObjectId(idProduto) }).toArray()
        console.log(produto)
        res.send(produto)
    } catch {
        res.sendStatus(401)
    }

}

export async function gerarCategoria(req, res) {

    const categoriaProduto = res.locals.categoriaProduto;

    console.log("entrou")
    try {

        console.log("antes da dividao")
        const categoria = await db.collection("produtos").find({ categoria: categoriaProduto }).toArray()

        res.send(categoria)
    } catch {
        res.sendStatus(401)
    }

}
