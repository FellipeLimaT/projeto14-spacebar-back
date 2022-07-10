import arrayProdutos from "../bancoProdutos/arrayProdutos.js";
import db from "./mongo.js";

export async function gerarProdutos(req, res) {
    console.log("entrou")

    // const deletar = await db.collection("produtos").deleteMany({ })

    // deletar
    // console.log("deletpu")
    try {
        const listaProdutos = await db.collection("produtos").find().toArray();
        // verificar se precia desse to Array pq insere uma lista ja
console.log(listaProdutos)
        if (listaProdutos.length === 0) {
console.log("dentro do if")
            const adicionarProdutos = await db.collection("produtos").insertMany(arrayProdutos)
           listaProdutos = await db.collection("produtos").find().toArray();
           console.log(listaProdutos)
        }

        res.send(listaProdutos)
    }catch{
        res.sendStatus(401)
    }
}