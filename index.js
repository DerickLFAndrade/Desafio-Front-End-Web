
function consumo() {

    fetch("https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json").then(response => {

        return response.json();

    }).then(body => {
        let index;
     
        let contador_cart = document.querySelector('[data-contador-cart]');
        const listarProdutos = () => {
           
            let quantCar = 0;
            let SomaTotal = 0;
            body.map(item => {
                const input = document.querySelector('[data-pesquisa]');
                const table = document.querySelector('[data-table]');
                const card = document.createElement('div');
                const button = document.createElement('button');
                input.focus();
                const criarCard = () => {


                    card.className = 'card';
                    card.id = 'card'
                    card.style.display = 'flex';
                    card.style.justifyContent = 'center';
                    card.style.alignItems = 'center';
                    card.style.border = '2px solid rgba(0, 0, 0, 0.1)';

                    card.style.marginLeft = '50px';
                    card.style.marginTop = '50px';


                    let cardImg = document.createElement('img');
                    cardImg.className = 'card-img-top';
                    cardImg.src = item.imageUrl;







                    let cardBody = document.createElement('div');
                    cardBody.className = 'card-body';


                    let categ = document.createElement('p');
                    categ.className = 'card-title';
                    categ.style.fontWeight = 'bold';
                    categ.style.color = 'blueviolet';
                    categ.innerHTML = item.category;
                    cardBody.appendChild(categ);

                    let titul = document.createElement('h4');
                    titul.className = 'titulo-prod';


                    titul.innerHTML = item.name;
                    cardBody.appendChild(titul);

                    let desc = document.createElement('p');
                    desc.className = 'card-text';
                    desc.style.fontSize = '8px';
                    desc.style.color = '#808080';
                    desc.innerHTML = 'Descrição padrão para todos os produtos';
                    cardBody.appendChild(desc);

                    let priceC = document.createElement('h4');
                    priceC.className = 'card-text';
                    priceC.style.fontSize = '15px';
                    priceC.style.fontWeight = 'bold';
                    priceC.innerHTML = `${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                    cardBody.appendChild(priceC);



                    button.className = 'button';
                    button.textContent = 'ADICIONAR AO CARRINHO';

                    button.style.fontWeight = 'bold';
                    button.style.border = 'none';
                    button.style.borderTop = '2px solid rgba(0, 0, 0, 0.1)';

                    cardBody.appendChild(button);
                    cardBody.style.display = 'flex';
                    cardBody.style.justifyContent = 'center';
                    cardBody.style.flexDirection = 'column';
                    card.appendChild(cardImg);
                    card.appendChild(cardBody);

                    table.appendChild(card);

                }

                const pesquisar = () => {

                    const icoP = document.querySelector('[data-ico-p]');

                    let filtroNome;
                    filtroNome = item.name.toUpperCase();
                    let inps;

                    input.addEventListener('input', () => {

                        inps = input.value.toUpperCase();
                    })

                    input.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') {

                            index = filtroNome.indexOf(inps);

                            if (index == -1) {

                                card.style.display = 'none';
                            } else {
                                card.style.display = 'block';
                            }
                        }
                    })
                    icoP.addEventListener('click', () => {
                        let index;
                        index = filtroNome.indexOf(inps);

                        if (index == -1) {

                            card.style.display = 'none';
                        } else {
                            card.style.display = 'block';
                        };
                    });


                }

                const adicionarCarrinho = () => {  
                    const cont_p = document.querySelector('[data-cont-p]');
                    const ico_cart = document.querySelector('[data-ico-cart]');
                    const cart_mod = document.querySelector('[data-cart]');
                    
                    
                   const msg = document.querySelector('[data-msg]')




                    //REPLICAR PRODUTOS NO CARRINHO
                    
                    const carrinho = document.querySelector('[data-carrinho-produto]');


                    const soma = document.querySelector('[data-soma]');
                    const fimCart = document.querySelector('[data-fim-cart]');
                    


                    const containerClone = document.querySelector("[data-prod-clone]");

                    const novoProd = containerClone.cloneNode(true);
                   

                    novoProd.style.display = '';
                   

                    const descItens = document.querySelector('[data-desc-itens]')

                  
                    let quantCarInt = 0;

                    button.addEventListener('click', () => {
                        descItens.style.display = ''
                        msg.style.display = 'none';
                        soma.style.display = '';
                        fimCart.style.display = '';
                        contador_cart.style.display = ''
                        
                        const categoria = novoProd.querySelector('[data-categoria]'); //1°
                        const nomeProd = novoProd.querySelector('[data-nome-prod]'); //2°
                        const contCart = novoProd.querySelector('[data-cont-cart-2]'); //3°
                        const valorUni = novoProd.querySelector('[data-valor-un]'); //4°
                        const dividido1 = novoProd.querySelector('[data-10x-1]'); //5°
                        const valorTot = novoProd.querySelector('[data-valor-tot]');//6°
                        const dividido2 = novoProd.querySelector('[data-10x-2]'); //7°
                       

                        const avista = document.querySelector('[data-avista]')//8°
                        const parcelado = document.querySelector('[data-parcelado]')
                        const totalCartao = document.querySelector('[data-total-pag]')

                        categoria.innerHTML = item.category;
                       nomeProd.innerHTML = item.name;

                        //contador externo total
                        contador_cart.innerHTML = quantCar + 1;
                        quantCar++;

                       //quantidade no carrinho (botão interno)
                       contCart.innerHTML = quantCarInt + 1;
                        quantCarInt++;


                       //valor unitário
                        valorUni.innerHTML = (item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                        //valor dividido 1
                        dividido1.innerHTML = `10X ${(item.price / 10).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;

                       

                        //valor total
                       valorTot.innerHTML = (item.price * quantCarInt).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
                        //valor dividido 1
                        dividido2.innerHTML = `10X ${((item.price * quantCarInt ) / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

                        SomaTotal += item.price;    
                    
                        //pagamento total à vista
                        avista.innerHTML = SomaTotal.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});

                        //pagamento total parcelado
                        parcelado.innerHTML = `10x de${(SomaTotal/10).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;

                        //pagamento total 
                        totalCartao.innerHTML = `(${SomaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})`;

                        
                       carrinho.appendChild(novoProd);
                     
                     
                        
                       
                    })
                    const bot_cont_cp = document.querySelector('[data-bot-cp]');

                    bot_cont_cp.addEventListener('click', () => {
                        cont_p.style.display = '';
                        cart_mod.style.display = 'none';
                        table.style.display = '';
                       
                    })

                    //abrir carrinho
                    ico_cart.addEventListener("click", () => {
                        cont_p.style.display = 'none';
                        cart_mod.style.display = '';
                        table.style.display = 'none';
                        cont_p.style.display = 'none';
                    })
                }

                adicionarCarrinho();

                criarCard();
                pesquisar();


            })

            const anima_Nav = () =>{
                const nav = document.querySelector('[data-nav]')
                const navFk = document.querySelector('[data-nav-fk]')
                const logo1 = document.querySelector('[data-logo-1]')
                document.onscroll = () => {

                    if (scrollY > 310) {
                        navFk.style.display = '';
                        contador_cart.style.color = '#fff'
                        nav.classList.add('anima');
                        nav.style.position = 'fixed';
                        nav.style.background = 'rgba(0, 0, 0, 0.4)';
                        nav.style.height = '60px';
                        logo1.style.color = 'white';
                    } else {
                        logo1.style.color = 'rgb(153, 153, 153)';
                        contador_cart.style.color = 'red'
                        nav.style.height = '70px';
                        navFk.style.display = 'none';
                        nav.classList.remove('anima');
                        nav.classList.add('anima2');
                        nav.style.position = '';
                        nav.style.background = '#fff';
                    }
                }
            }
           anima_Nav();




        }






        listarProdutos();
        console.log(index)

    });



}
consumo()


//bolNex.addEventListener('click', selection)
