
// Добвление в корзину, кол-во, сумма.

import API from "../API.js";
import GoodList from "../model/GoodList.js";



export default function addEventListenerForAddToCardButtons(){
    const addToBtns = document.querySelectorAll('button[data-productId]');
    addToBtns.forEach( function (button){
        button.addEventListener('click', addedProductHandler);
    });
}

function addedProductHandler(event){
    const productId = event.currentTarget.getAttribute('data-productId');
    // console.log(productId);
    addProductIntoBasket(productId);
}

// addEventListenerForAddToCardButtons();

const basketCounterEl = document.querySelector('.cartIconWrap span')
const openBasketBtn = document.querySelector('.cartIconWrap')
const basketEl = document.querySelector('.basket')
const basketTotalEl = document.querySelector('.basketTotal')
const basketTotalValueEl = document.querySelector('.basketTotalValue')



const goodList = new GoodList(API.fetch());
console.log(goodList);
const nameProduct = goodList.get().map(name =>{
    return name.title
});
const priceProduct = goodList.get().map(price =>{
    return price.getPrice()
});

// const nameProduct = [nameProd[0],'Reebok','Umbro','L&V','adidas','nike'];
// const priceProduct = [15,25,30,10,40,5];

openBasketBtn.addEventListener('click',function(){
    basketEl.classList.toggle('hidden');
})

let basket = {};

function addProductToObject(productId){
    if(!(productId in basket)){
        basket[productId] = 1;
    }else{
        basket[productId]++;
    }
}

function renderProductInBasket(productId){
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`)
    if(productExist){
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    }else{
        renderNewProductInBasket(productId)
    }
}

function increaseCounterEl(){
    basketCounterEl.textContent++;
}

function increaseProductCount(productId){
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

function recalculateSumForProduct(productId){
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let TotalPriceForRow = (basket[productId] * priceProduct[productId]);
    productTotalRowEl.textContent = TotalPriceForRow;
}

function renderTotalBasketSum(){
    let TotalSum = 0;
    for ( let productId in basket){
        TotalSum += (basket[productId] * priceProduct[productId]);
    }
    basketTotalValueEl.textContent = TotalSum;
}

function addProductIntoBasket(productId){
    // console.log(productId);
    increaseCounterEl();
    addProductToObject(productId);
    renderProductInBasket(productId);
    renderTotalBasketSum();
}

function renderNewProductInBasket(productId){
    let productRow = `
        <div class="basketRow">
            <div>${nameProduct[productId]}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${priceProduct[productId]}</div>
            <div>
                <span class="productTotalRow" data-productId="${productId}">${priceProduct[productId]}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
}