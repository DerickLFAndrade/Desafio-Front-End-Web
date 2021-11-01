
function consumo() {

    fetch("https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json").then(response => {

        return response.json();

    }).then(body => {
        let index;
        
        const listarProdutos = () => {
            
            body.map(item => {
                const input = document.querySelector('[data-pesquisa]');
                const table = document.querySelector('[data-table]');
                const card = document.createElement('div');
                const button = document.createElement('button');
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
                        index = filtroNome.indexOf(inps)

                        if (index == -1) {

                            card.style.display = 'none';
                        } else {
                            card.style.display = 'block';
                        };
                    });


                }
               
                const adicionarCarrinho = () => {
                    const cont_p = document.querySelector('[data-cont-p]')
                  const ico_cart = document.querySelector('[data-ico-cart]')
                    const cart_mod = document.querySelector('[data-cart]')
                    ico_cart.addEventListener("click", () => {
                        cont_p.style.display = 'none';
                        cart_mod.style.display = 'block';
                        table.style.display = 'none';
                        cont_p.style.display = 'none';
                       
                       
                    })
                }

                adicionarCarrinho();
               
                criarCard();
                pesquisar();

              
            })





        }




      

        listarProdutos();
        console.log(index)

    });

  

}
consumo()


//bolNex.addEventListener('click', selection)
