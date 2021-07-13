import API from "./API.js";
import GoodList from "./model/GoodList.js";
import Card from "./view/Card.js";
import basket from "./basket/basket.js";
import Cart from "./model/Cart.js";
import GoodInCart from "./model/GoodInCart.js";


function addToCart(id){
    const good = goodList.getById(id)
    console.log(id)
    
    cart.add(new GoodInCart(good))
    console.log(cart)

    console.log(cart.getQuantity())
}
const goodList = new GoodList(API.fetch());
const cart = new Cart([])
// console.log(cart)

const $itemContainer = document.querySelector('.featuredItems')

let cards = goodList.get().map( (good) => new Card(good))// console.log(cards)

cards.forEach( card => {
    card.setAddHandler(addToCart)
    card.render($itemContainer)    
})
// console.log(cards)

const basketCreate = new basket();



 