import { Router } from "express";
import { gerarProdutos, gerarProdutoEspecifico, gerarCategoria} from '../controllers/productsController.js'


const router = Router()

router.get('/produtos', gerarProdutos);

router.param("id", (req, res, next, id) => {
    console.log("This function will be called first");
    const idProduto = req.params.id

    console.log(idProduto)

  res.locals.idProduto = idProduto;
    next();
});

router.get('/produtos/:id',gerarProdutoEspecifico)

router.param("categoria", (req, res, next, id) => {
  console.log("This function will be called first");
  const categoriaProduto = req.params.categoria

  console.log(categoriaProduto)

res.locals.categoriaProduto = categoriaProduto;
  next();
});
router.get('/categoria/:categoria',gerarCategoria)




export default router;

// {
//     "_id": "62c868b5aa35bd47c913e74c",
//     "nome": "Cobos Felino Malbec 2021",
//     "valor": 135.07,
//     "descricao": "Um Malbec argentino que combina estrutura, densidade e equilíbrio. Além de tudo, foi feito pelas mãos do enólogo mais respeitado da atualidade: Paul Hobbs. Este tinto frescos e com acidez viva, são a expressão de frutas puras e a riqueza de cada variedade.",
//     "volume": "750 mL",
//     "tipo": "Malbec",
//     "categoria": "vinho",
//     "origem": "Mendoza",
//     "teor": "14%",
//     "imagem": "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/ARCOB0301A-vinho-tinto-cobos-felino-malbec-750ml_1024x1024_9cf9cd28-8952-4d21-b44a-d65a873979e0_1024x1024.png?v=1647957046"
//   }