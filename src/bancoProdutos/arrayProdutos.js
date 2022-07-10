const arrayProdutos = [{
    nome: "Cobos Felino Malbec 2021",
    valor: 135.07,
    descricao: "Um Malbec argentino que combina estrutura, densidade e equilíbrio. Além de tudo, foi feito pelas mãos do enólogo mais respeitado da atualidade: Paul Hobbs. Este tinto frescos e com acidez viva, são a expressão de frutas puras e a riqueza de cada variedade.",
    volume: "750 mL",
    tipo: "Malbec",
    categoria: "vinho",
    origem: "Mendoza",
    teor: "14%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/ARCOB0301A-vinho-tinto-cobos-felino-malbec-750ml_1024x1024_9cf9cd28-8952-4d21-b44a-d65a873979e0_1024x1024.png?v=1647957046"
},
{
    nome: "Errazuriz Max Reserva Cabernet Sauvignon 2019",
    valor: 180.12,
    descricao: "Não tem como negar a tipicidade deste vinho. Ele mostra a pura expressão da Cabernet Sauvignon no Vale do Aconcágua e expressa exatamente aquilo que mais gostamos nos vinhos chilenos.",
    volume: "750 mL",
    tipo: "Sauvignon",
    categoria: "vinho",
    origem: "Vale do Aconcágua",
    teor: "14%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/CHERR0302A-vinho-tinto-errazuriz-max-reserva-cabernet-sauvignon-750ml_1024x1024_e9836b14-c45c-41fe-aade-434ae2498863_1024x1024.png?v=1644862413"
},
{
    nome: "Escorihuela Familia Gascon Malbec 2021",
    valor: 94.27,
    descricao: "Ela é de origem francesa, mais precisamente do sudoeste francês, Cahors, porém foi em solo argentino que esta casta tinta desabrochou sua mais pura expressão. Este Malbec carrega aromas e sabores frutados com um toque de violeta – uma de suas principais características. Seu estágio em carvalho o emprestou mais complexidade de aromas trazendo baunilha, coco queimado e caramelo. Em boca, é potente, denso e macio.",
    volume: "750 mL",
    tipo: "Malbec",
    categoria: "vinho",
    origem: "Mendoza",
    teor: "14%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/ARESC0201A-vinho-tinto-escorihuela-familia-gascon-malbec-750ml_69310036-2594-4329-a852-8444dec1d712_1024x1024.png?v=1647268278"
},
{
    nome: "Cobos Cocodrilo Red Blend 2019",
    valor: 270.22,
    descricao: "Este exemplar argentino nos presenteia com todas as qualidade de um Bordeaux, aliadas ao trabalho do renomado enólogo Paul Hobbs e ao terroir especial de Mendoza.",
    volume: "750 mL",
    tipo: "Red Blend",
    categoria: "vinho",
    origem: "Mendoza",
    teor: "15%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/ARCOB1049A-vinho-tinto-cobos-cocodrilo-blend-2017-750ml_59f997ad-f966-4c5a-b4c7-298d988e452e_1024x1024.png?v=1644429029"
},
{
    nome: "Leyda Syrah Reserva 2020",
    valor: 98.52,
    descricao: "A mistura de frutas vermelhas e pretas, com um barril suave, faz deste Syrah um vinho interessante e atraente. Além de ser representativa do seu terroir, esta linha busca respeitar a fruta e a identidade de cada videira, dando origem a vinhos expressivos, diretos, frescos e suculentos.Syrah",
    volume: "750 mL",
    tipo: "Syrah",
    categoria: "vinho",
    origem: "Vale Do Leyda",
    teor: "13%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/pngs-site-padraoCHVLY0105A_1024x1024.png?v=1651003538"
},
{
    nome: "Leyda Cabernet Sauvignon Reserva 2021",
    valor: 98.52,
    descricao: "Além de ser representativa do seu terroir, esta linha busca respeitar a fruta e a identidade de cada videira, dando origem a vinhos expressivos, diretos, frescos e suculentos. Frutas vermelhas e torradas leves, um Cabernet macio e estruturado.",
    volume: "750 mL",
    tipo: "Cabernet Sauvignon",
    categoria: "vinho",
    origem: "Vale Do Maipo",
    teor: "13%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/LEYDARESCABERNETSAUVIGNON_2021_1024x1024.png?v=1656593423"
},
{
    nome: "Escorihuela Familia Gascon Chardonnay 2021",
    valor: 94.27,
    descricao: "Um típico Chardonnay jovem, com aromas intensos e convidativos ao próximo gole.",
    volume: "750 mL",
    tipo: "Chardonnay",
    categoria: "vinho",
    origem: "Mendoza",
    teor: "13.5%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/AXI6245_1024x1024.png?v=1640798294"
},
{
    nome: "Garofoli Anfora Verdicchio Dei Castelli 2020 ",
    valor: 103.62,
    descricao: "Respeitando as tradições de Castelli de Jesi, a garrafa do Verdicchio da vinícola Garofoli tem formato de ânfora. Para quem não conhece, a região é uma das mais clássicas de toda a Itália para o cultivo da uva. Seus aromas nos levam a um passeio por um bosque italiano.",
    volume: "750 mL",
    tipo: "Verdicchio",
    categoria: "vinho",
    origem: "Mendoza",
    teor: "12%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/ITGAR0149A-vinho-branco-garofoli-anfora-750ml_1024x1024_43a38114-3f71-4af7-9056-e885e68b978f_1024x1024.png?v=1632519230"
},
{
    nome: "Errazuriz Estate Series Reserva Sauvignon Blanc 2021",
    valor: 99.00,
    descricao: "Um típico Chardonnay jovem, com aromas intensos e convidativos ao próximo gole.",
    volume: "750 mL",
    tipo: "Chardonnay",
    categoria: "vinho",
    origem: "Vale do Aconcágua",
    teor: "12.5%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/CHERR0250A-vinho-branco-errazuriz-estate-series-chardonnay-reserva-2016-750ml_1024x1024.png?v=1644866911"
}, {
    nome: "Poderi Dal Nespoli Trebbiano Chardonnay 2019",
    valor: 88.80,
    descricao: "Duas grandes videiras brancas dão vida a Nespolino. O vinho que celebra Nespoli e a tipicidade do território, mas também a união com uma variedade internacional que produz excelentes resultados em Romagna.",
    volume: "750 mL",
    tipo: "Chardonnay",
    categoria: "vinho",
    origem: "Romagna",
    teor: "14%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/ITBMO1350A18-nespolino-rubicone-igt-trebbiano-chardonnay-750ml_ff4483f2-9075-4671-b0df-7ecd29ea9e43_1024x1024.png?v=1604831085"
}, {
    nome: "San Marzano Il Pumo Sauvignon Malvasia 2020",
    valor: 100.00,
    descricao: "Pense em um Sauvignon Blanc que te agrada. Agora imagine o que encontrará dentro da garrafa de um Sauvignon Blanc italiano da Puglia. Imaginou? A Puglia é um dos lugares mais quentes de toda a Itália. Localizada no salto da bota, tem seus vinhedos refrescados pela maresia do Mar Adriático. O solo da Puglia é composto de areia, argila, greda e pedra calcária, o cenário perfeito para fazer brotar uvas vigorosas e exuberantes. Este Sauvignon Blanc é impetuoso.",
    volume: "750 mL",
    tipo: "Sauvignon Blanc",
    categoria: "vinho",
    origem: "Puglia",
    teor: "14%",
    imagem: "https://cdn.shopify.com/s/files/1/0301/7405/2411/products/ITMAR0199A-vinho-branco-san-marzano-il-pumo-sauvignon-malvasia-750ml_1024x1024_effa965a-d29d-472e-8b0c-af33486c3a1c_1024x1024.png?v=1635457565"
}, {
    nome: "Cerveja Patagonia IPA ",
    valor: 6.90,
    descricao: "Cerveja IPA com lúpulos plantados e colhidos em nossa própria fazenda, trazendo uma cerveja de sabor equilibrado e fácil de beber. Feito com água, malte e lúpulos argentinos e americanos. Produto pronto para consumo.",
    volume: "350 mL",
    tipo: "American India Pale Ale",
    categoria: "cerveja",
    origem: "Patagonia",
    teor: "5.8%",
    imagem: "https://emporiodacerveja.vtexassets.com/arquivos/ids/180554-800-auto?v=637683712159930000&width=800&height=auto&aspect=true"
}, {
    nome: "Cerveja Goose Island Midway",
    valor: 7.20,
    descricao: "Com 4,1% de teor alcoólico, 30 IBU e aroma de frutas tropicais, a Midway IPA é uma Session IPA leve e refrescante . Ela tem sua história toda ligada à Chicago. Seu nome é originário da Feira Mundial da cidade, de 1893. Em seu centro, estava a Midway Plaisance, uma área que exibia a primeira roda gigante do mundo, reunindo visitantes de todas as nacionalidades. Nesse espírito, a cerveja é uma session pronta para reunir amantes de cerveja de todos os cantos do planeta.",
    volume: "350 mL",
    tipo: "Session IPA",
    categoria: "cerveja",
    origem: "Goose Island",
    teor: "4.1%",
    imagem: "https://emporiodacerveja.vtexassets.com/arquivos/ids/180383-800-auto?v=637660304443100000&width=800&height=auto&aspect=true"
}, {
    nome: "Cerveja Bodebrown Trooper Brasil IPA ",
    valor: 19.90,
    descricao: "A cerveja Trooper Brasil IPA, foi criada e desenvolvida com o vocalista do Iron Maiden, Bruce Dickinson e os irmãos Cavalcanti da Cervejaria Brodebrown. Bruce convidou os irmãos Cavalcanti pra desenvolver uma nova receita da Trooper no Brasil, especialmente para os fãs do Iron Maiden e da Brodebrown com um DNA bem brasileiro e tropical. Uma Trooper Brasil IPA.",
    volume: "473 mL",
    tipo: "India Pale Ale (IPA)",
    categoria: "cerveja",
    origem: "Bodebrown",
    teor: "5.0%",
    imagem: "https://emporiodacerveja.vtexassets.com/arquivos/ids/175608-600-auto?v=637157425414000000&width=600&height=auto&aspect=true"
}, {
    nome: "Cerveja Goose Island Midway",
    valor: 6.99,
    descricao: "Com 4,1% de teor alcoólico, 30 IBU e aroma de frutas tropicais, a Midway IPA é uma Session IPA leve e refrescante . Ela tem sua história toda ligada à Chicago. Seu nome é originário da Feira Mundial da cidade, de 1893. Em seu centro, estava a Midway Plaisance, uma área que exibia a primeira roda gigante do mundo, reunindo visitantes de todas as nacionalidades. Nesse espírito, a cerveja é uma session pronta para reunir amantes de cerveja de todos os cantos do planeta.",
    volume: "350 mL",
    tipo: "India Pale Ale (IPA)",
    categoria: "cerveja",
    origem: "Goose Island",
    teor: "4.1%",
    imagem: "hhttps://emporiodacerveja.vtexassets.com/arquivos/ids/180188-600-auto?v=637626479285800000&width=600&height=auto&aspect=true"
}, {
    nome: "Cerveja Patagonia IPA",
    valor: 4.99,
    descricao: "Cerveja IPA com lúpulos plantados e colhidos em nossa própria fazenda, trazendo uma cerveja de sabor equilibrado e fácil de beber. Feito com água, malte e lúpulos argentinos e americanos. Produto pronto para consumo.",
    volume: "350 mL",
    tipo: "India Pale Ale (IPA)",
    categoria: "cerveja",
    origem: "Patagonia",
    teor: "5.8%",
    imagem: "https://emporiodacerveja.vtexassets.com/arquivos/ids/181719-600-auto?v=637783664230170000&width=600&height=auto&aspect=true"
}, {
    nome: "Cerveja Goose Island Hazy ",
    valor: 11.99,
    descricao: "Uma clássica Hazy IPA com paladar aveludado proveniente da aveita, a Goose Session Hazy apresenta um aroma tropical frutado proveniente dos lúpulos em seus dois dry hoppings (Double Dry-Hopped, ou DDH)",
    volume: "355 mL",
    tipo: "American IPA",
    categoria: "cerveja",
    origem: "Goose Island",
    teor: "6.0%",
    imagem: "https://emporiodacerveja.vtexassets.com/arquivos/ids/180548-600-auto?v=637680942121100000&width=600&height=auto&aspect=true"
}, {
    nome: "Cerveja Wals Session Citra",
    valor: 14.99,
    descricao: "A massiva quantidade de lúpulo americano Citra e base de malte fazem dessa Session IPA uma explosão de refrescância. Possui amargor moderado e aroma cítrico. A Cerveja Wals Session Citra 600ml, mesmo consumida em grandes quantidades, não perde suas qualidades nem seus sabores intensos (sempre relevantes ao paladar). Campeã Nacional com Medalha de Prata no Estilo Pale Beer Session IPA na WBA 2017.",
    volume: "600 mL",
    tipo: "Session IPA",
    categoria: "cerveja",
    origem: "Wals",
    teor: "3.9%",
    imagem: "https://emporiodacerveja.vtexassets.com/arquivos/ids/169207-600-auto?v=636510334789970000&width=600&height=auto&aspect=true"
}, {
    nome: "Cerveja Roleta Russa Easy ",
    valor: 9.90,
    descricao: "Estilo americano, de coloração amarelo claro, espuma branca de boa formação e persistência. Aroma e sabor cítrico que remetem a frutas tropicais e amarelas, como maracujá e mamão papaia. Corpo leve, boa carbonatação e alta drinkability. O amargor é moderado e se equilibra com a carga de aroma e sabor que se sobressai nesta cerveja. Noaftertaste perdura as notas cítricas e refrescância proporcionada",
    volume: "350 mL",
    tipo: "India Pale Ale (IPA)",
    categoria: "cerveja",
    origem: "Roleta Russa",
    teor: "4.8%",
    imagem: "https://emporiodacerveja.vtexassets.com/arquivos/ids/175242-600-auto?v=637091866516900000&width=600&height=auto&aspect=true"
}, {
    nome: "Whisky Cutty Sark",
    valor: 54.99,
    descricao: "Whisky escocês. Lançado em 1923. Cutty Sark Blended Scotch Whisky foi o primeiro whisky de cor naturalmente clara, inspirando a sua identidade e imagem no famoso e veloz clipper (veleiro) inglês, Cutty Sark.Cutty Sark Blended é um genuíno whisky escocês de lote de qualidade premium, que nasce após seis meses de casamento entre uma seleção dos melhores whiskies de malte, com particular predominância da região de speyside, e whiskies de grão de elevada qualidade. O resultado é uma combinação inconfundível de sabores e a consistência tão reconhecida ao Whisky Cutty Sark ",
    volume: "1L",
    tipo: "Blended",
    categoria: "whisky",
    origem: "Cutty Sark",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/6420_Whisky_Cutty_Sark_8_Anos_1_L.1537275570.jpg"
}, {
    nome: "Whisky Grant's",
    valor: 69.99,
    descricao: "Whisky escocês elaborado a partir de Malt Whisky e Destilado Alcoólico de Cereias Envelhecido.  Um whisky amadurecido em três tipos diferentes de madeira para um sabor suave, rico e suave. Muitos uísques tiram o sabor de apenas um barril, mas o Triple Wood da Grant é amadurecido em três tipos diferentes de madeira: o barril Virgin Oak fornece robustez picante, o American Oak empresta suavidade sutil de baunilha e o refil de Bourbon oferece doçura de açúcar mascavo, resultando em um sabor mais suave e rico.",
    volume: "1L",
    tipo: "Blended",
    categoria: "whisky",
    origem: "Grants",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/6470_Whisky_Grants_Triple_Wood_1L.1570561116.jpg"
}, {
    nome: "Whisky Black & White",
    valor: 64.99,
    descricao: "Whisky escocês. Black & White foi desenvolvido há mais de um século atrás por James Buchanan, e se tornou um dos mais importantes representantes de scotch whisky no século XIX. James criou um blend mais suave e leve que os outros scotchs do mercado, porém mantendo a mesma essência de consistência e sabor.",
    volume: "1L",
    tipo: "Blended",
    categoria: "whisky",
    origem: "Black & White",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/6470_Whisky_Grants_Triple_Wood_1L.1570561116.jpg"
}, {
    nome: "Whiskey Jack Daniels",
    valor: 144.99,
    descricao: "Whiskey Jack Daniels 1 L. Repousa nos barris do meio dos armazéns da destilaria, até que chegue ao ponto perfeito para se tornar um verdadeiro Tennessee Whiskey. Possui um sabor suave e marcante de madeira no início. Acompanhado por tons adocicados e notas de baunilha. Por ter notas frutadas é a combinação perfeita com refrigerante de Cola e Citrus, além de drinks com frutas cítricas, como maracujá, limão e laranja. A icônica garrafa quadrada é um símbolo da marca. Representa a modernidade, por ter sido criada em 1895 sendo uma inovação para a época, e a tradição, por continuar a mesma até hoje. Sugestão de consumo: Puro, com gelo e devido ao seu toque cítrico combina bem em drinks como o Jack & Cola, Jack & Citrus. Graduação alc. 40% vol. - 1000 ml (vidro). Whiskey importado dos Estados Unidos.",
    volume: "1L",
    tipo: "Tenessee",
    categoria: "whisky",
    origem: "Jack Daniels",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/6423_Whiskey_Jack_Daniels_1_L.1582112746.jpg"
}
, {
    nome: "Whisky Johnnie Walker Black Label",
    valor: 179.99,
    descricao: "Whisky escocês. Quando se bebe Johnnie Walker Black Label, na verdade estão apreciando o resultado de uma arte: a arte de criar um blend harmonioso, de cerca de 40 dos melhores maltes e whiskies de grãos escoceses, envelhecidos por, no mínimo, 12 anos, para formar um único Scotch Whisky de sabor e qualidade inigualáveis, como queria John Walker. Os quatro aromas mais significativos de Johnnie Walker Black Label são: Creme de baunilha, frutas frescas, frutas encorpadas e aromas da terra. Hoje, Johnnie Walker Black Label é reconhecido pelos consumidores não só como símbolo de progresso, mas de sofisticação e estilo.",
    volume: "750ml",
    tipo: "Blended",
    categoria: "whisky",
    origem: "Johnnie Walker",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/6408-whisky-johnnie-walker-black-label-12-anos-1-l.1648670534.jpg"
}, {
    nome: "Whisky Jim Beam White",
    valor: 99.99,
    descricao: "Whisky Jim Beam White 1L. Whisky elaborado a partir de destilado alcóolico de milho, centeio e malte de cevada. Envelhecido em Kentuck, Estados Unidos. Bourbon. Graduação alcoólica 40%vol - 1000ml. Whisky importado dos Estados Unidos.",
    volume: "1L",
    tipo: "Bourbon",
    categoria: "whisky",
    origem: "Jim Beam",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/6489_Whisky_Jim_Beam_White_1_L.1534621684.jpg"
}, {
    nome: "Whisky Johnnie Walker Red Label",
    valor: 79.99,
    descricao: "Whisky Johnnie Walker Red Label 1L. Whisky escocês. Johnnie Walker Red Label é produzido com os melhores ingredientes e a tradição da família Johnnie Walker. Tem uma seleção inigualável de maltes na sua composição que garantem sua superioridade. São mais de 35 maltes, tendo como principal o Cardhu, reconhecido maltes das Terras Altas (Highlands). Talisker, outro importante malte na sua composição, vai garantir o paladar mais profundo e picante, oposto de Cardhu. Graduação alcoólica 40% vol. - Conteúdo 1000 ml (vidro). Whisky importado da Escócia.",
    volume: "1L",
    tipo: "Blended",
    categoria: "whisky",
    origem: "Johnnie Walker",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/6407-whisky-johnnie-walker-red-label-1-l.1648671628.jpg"
}, {
    nome: "Gin Gordon's London Dry",
    valor: 59.99,
    descricao: "Desde 1769 que a maior preocupação de Alexander Gordon era a qualidade dos ingredientes que compõem o gin Gordon’s London Dry. Bagas de Zimbro, sementes de coentro e outros botânicos são os principais ingredientes que conferem a Gordon’s o sabor intenso que lhe é característico. Após uma escolha cuidadosamente selecionada, 9 em cada 10 bagas de Zimbro são rejeitadas no processo de produção. De seguida são guardadas por dois anos para intensificar os óleos e o aroma doce. O aroma das bagas de zimbro associado ao sabor intenso de Gordon’s London Dry, fazem de Gordon’s o gin ideal para um Gin Tónico perfeito.",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Gordons London",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/9096_Gin_Gordons_London_Dry_750_ml.1534622494.jpg"
}, {
    nome: "Gin Beefeater London Dry",
    valor: 89.99,
    descricao: "O Beefeater London Dry tem um sabor extremamente puro, com um ousado caráter de zimbro que é equilibrado com fortes notas cítricas, tornando-o o gin perfeito para desfrutar com a tônica de sua preferência. O sabor perfeitamente equilibrado garante uma alta flexibilidade para drinks.",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Beefeater",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/9098-gin-beefeater-london-dry-750ml.20220616125801.1655395081.jpg"
}, {
    nome: "Gin Bombay Sapphire Dry London",
    valor: 109.99,
    descricao: "O Gin Bombay Sapphire Dry London é uma bebida inglesa composta de destilado alcoólico retificado e extratos vegetais aromáticos. O incomparável sabor de Bombay Sapphire é resultado de uma cuidadosa seleção de ervas aromáticas e um exclusivo processo de destilação, proporcionando um aroma único e agradável.",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Bombay",
    teor: "36%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/9053_Gin_Bombay_Sapphire_Dry_London_750_ml.1534622320.jpg"
}, {
    nome: "Gin Tanqueray Dry",
    valor: 119.99,
    descricao: "Destilado 4 vezes a partir de grãos, ervas e especiarias da Itália selecionadas manualmente, com água puríssima, enorme atenção ao processo de produção e controle de qualidade, Tanqueray amadureceu por 8 meses antes de ser engarrafado na Inglaterra, de onde segue para todo o mundo.",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Tanqueray",
    teor: "49%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/9095_Gin_Tanqueray_Dry_750_ml.1534622252.jpg"
}, {
    nome: "Gin Apogee Rose",
    valor: 39.99,
    descricao: "O Gin Apogee Rose é bem fresco e muito aromático, em sua fórmula tem a infusão de Cranberry, Pitaya & Pimenta Rosa. Os botânicos são macerados antes da ultima destilação começar e depois da destilação o gin fica um bom período em repouso.",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Apogee",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/85122-gin-apogee-rose-1l.1626812793.jpg"
}, {
    nome: "Gin Apogee Citrus",
    valor: 39.99,
    descricao: "O Gin Apogee Citrus é bem fresco e muito aromático, em sua fórmula tem a infusão de Tangerina e Laranja Valência. Os botânicos são macerados antes da ultima destilação começar e depois da destilação o gin fica um bom período em repouso.",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Apogee",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/85120-gin-apogee-citrus-1l.1626807300.jpg"
}, {
    nome: "Gin Apogee",
    valor: 39.99,
    descricao: "O Gin Apogee é o único gin nacional a utilizar álcool zero hidrocarboneto, a mais pura base em fabricação no mundo para se destilar gin. Não se sente o odor ou aroma de álcool. Ideal para ser degustado gelado e na composição de drinks.",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Apogee",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/13072-gin-apogee-1l.1627478254.jpg"
}, {
    nome: "Gin Seager's",
    valor: 37.99,
    descricao: "Líder do mercado nacional, o Gin Seager's é sinônimo de Gin no Brasil. É do tipo London Gin, conhecido como dry ou seco. É uma das mais tradicionais bebidas apreciadas no Brasil, onde é produzido há mais de 50 anos. Com sabor e aroma majoritariamente de zimbro, além de notas cítricas de cascas de laranjas e especiarias. ",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Seagers",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/9054-gin-seager-s-london-dry-1l.1624481518.jpg"
},{
    nome: "Gin Hendrick's",
    valor: 37.99,
    descricao: "Lançado em 1999, surpreendeu ao ser servido num copo largo que, em vez do usual limão, tinha uma rodela de pepino e pétalas de rosa! As pétalas de rosa e o pepino, para além do tradicional zimbro, são ambos usados na produção do Hendricks para conseguir o seu sabor tão característico. Para além da forma de servir, a Hendricks também inovou com a imagem da sua garrafa, toda preta, a lembrar as garrafas medicinais antigas, com um rótulo do estilo vintage.",
    volume: "750ml",
    tipo: "London Dry",
    categoria: "gin",
    origem: "Hendricks",
    teor: "40%",
    imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/62006-gin-hendrick-s-750ml.1640113572.jpg"
}
]

export default arrayProdutos;