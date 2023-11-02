class CardTennis extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.id = this.getAttribute('id');
        this.brand = this.getAttribute('brand')
        this.title = this.getAttribute('title'); 
        this.subtitle = this.getAttribute('subtitle');
        this.image = this.getAttribute('imageUrl');
        this.paragraph = this.getAttribute('paragraph');
        this.price = this.getAttribute('price'); 

    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
            <article>
                <div class="card_image">
                    <h2>${this.brand}</h2>
                    <img src=${this.image} alt="">
                </div>
                <div class="card_info">
                    <h2>${this.title}</h2>
                    <h3>${this.subtitle}</h3>
                    <p>${this.paragraph}</p>
                    <div class="card_info_menu">
                        <span>$ ${this.price}</span>
                        <button>Add Item 🛒</button>
                    </div>
                </div>
            </article>

        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
            <styles>
            :host{
                --primary:#fd513b;
                --secondary:#73d295;
                --gray-ligth:#F5EFEF;
                --gray-dark:#E1DFDF;
                --letter:#fcfccf;
                --font:"Source Sans Pro", "Arial", sans-serif;
                display:flex;
                flex-direction:column;
                width:300px;
                border-radius:5px;
                  overflow:hidden;
                font-family: var(--font);
                  box-shadow: 2px 4px 10px var(--primary);
                 
            }
            .card_image{
                height:200px;
                width:300px;
                position: relative;
                background-color: var(--primary);
            }
            .card_image h2{
                margin-left:10px;
                margin-top:15px;
                font-size:40px;
                color:var(--gray-ligth);
            }
            .card_image img{
                width:200px;
                height:170px;
                position: absolute;
                bottom:-50px;
                left:15%;
            }
            .card_info {
                padding:10px;
                                
            }
            .card_info h2{
                text-align:center;
            }
            .card_info h3{
                color:var(--gray-dark);
            }
            .card_info_menu{
                width:100%;
                height:35px;
                display:flex; 
                justify-content:space-between;
            }
            .card_info_menu span{
              font-size:20px;
              font-weight:bold;
              align-self:center;
            }
            button{
              border:none;
              height:30px;
              padding:6px;
              border-radius:5px;
              background-color:var(--primary);
              color:var(--letter);
            }
            button:hover{
                background-color:var(--secondary);
            }
            @media (min-width: 700px)  {
              article{
                flex-direction:row;
                width:600px;
              }
              .card_image{
                  height:300px;
                  width:300px;
                  position: relative;
                  background-color: var(--primary);
              }
              .card_image img{
                    width:300px;
                    height:270px;
                    position: absolute;
                    bottom:0px;
                    left:-15px;
                    transform: rotate(-30deg);
                }
                 .card_info {
                      width:300px;
                   display:flex;
                   flex-direction:column;
                   justify-content:space-around;
                 }
            }
            </styles>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render();
    }
}