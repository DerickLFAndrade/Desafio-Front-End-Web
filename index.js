
function consumo() {
     
    fetch("https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json").then(response => {

        return response.json()

    }).then(body => {
        
        const listarProdutos = () => {
                body.map( item => {
                
                const table = document.querySelector('[data-table]')
                let card = document.createElement('div')
                card.className = 'card'
                card.style.display = 'flex'
                card.style.justifyContent = 'center'
                card.style.alignItems = 'center'
                card.style.border = '2px solid rgba(0, 0, 0, 0.1)'

                card.style.marginLeft = '50px'
                card.style.marginTop = '50px'
                card.style.width = '300px'
                card.style.height = '500px'

                let cardImg = document.createElement('img')
                cardImg.className = 'card-img-top'
                cardImg.src = item.imageUrl
                cardImg.style.width = '200px'






                let cardBody = document.createElement('div')
                cardBody.className = 'card-body'

                let categ = document.createElement('p')
                categ.className = 'card-title'
                categ.style.fontWeight = 'bold'
                categ.style.color = 'blueviolet'
                categ.innerHTML = item.category
                cardBody.appendChild(categ)

                let titul = document.createElement('h4')
                titul.className = 'titulo-prod'


                titul.innerHTML = item.name
                cardBody.appendChild(titul)

                let desc = document.createElement('p')
                desc.className = 'card-text'
                desc.style.fontSize = '8px'
                desc.style.color = '#808080'
                desc.innerHTML = 'Descrição padrão para todos os cards, pois em alguns produtos a descrição é muito grande, deixando o design ruim'
                cardBody.appendChild(desc)

                let price = document.createElement('h4')
                price.className = 'card-text'
                price.style.fontSize = '15px'
                price.style.fontWeight = 'bold'
                price.innerHTML = `R$ ${item.price}`
                cardBody.appendChild(price)



                let button = document.createElement('button')
                button.className = 'button'
                button.textContent = 'ADICIONAR AO CARRINHO'

                button.style.fontWeight = 'bold'
                button.style.border = 'none'
                button.style.borderTop = '2px solid rgba(0, 0, 0, 0.1)'

                cardBody.appendChild(button)
                cardBody.style.display = 'flex'
                cardBody.style.justifyContent = 'center'
                cardBody.style.flexDirection = 'column'
                card.appendChild(cardImg)
                card.appendChild(cardBody)

                table.appendChild(card)


                    const armazenarNome = () => {
                        const input = document.querySelector('[data-pesquisa]')
                        const icoP = document.querySelector('[data-ico-p]')
                       
                        let filtroNome;
                        filtroNome = item.name.toUpperCase();
                        let inps;
                      
                        input.addEventListener('input', () => {
                            
                            inps = input.value.toUpperCase();
                        })
                        icoP.addEventListener('click', () => {
                            let index;
                            index = filtroNome.indexOf(inps)

                            if (index == -1) {

                                card.style.display = 'none'
                            } else {
                                card.style.display = 'block'
                            }
                        })


                    }
                    armazenarNome();
            })

           
           


        }

       
       
       
        const adicionarCarrinho = () => {

        }

        listarProdutos();


    });
}
consumo()