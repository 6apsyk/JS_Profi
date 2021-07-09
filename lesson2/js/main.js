import API from "./API.js";
import GoodList from "./model/GoodList.js";
import Card from "./view/Card.js";
import basket from "./basket/basket.js";


const goodList = new GoodList(API.fetch());

const $itemContainer = document.querySelector('.featuredItems')

let cards = goodList.get().map( (good) => new Card(good,API.fetch().length) )


cards.forEach( card => {
    card.render($itemContainer)
})


const basketCreate = new basket();


 