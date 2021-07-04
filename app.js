'use strict';
class Goods {
    constructor(title, price){
        this._title = title;
        this._price = price;
    }
    render() {
        return `<div><h3>${this._title}</h3><p>${this._price}</p></div>`
    }
}

class GoodsList{
    constructor(goods){
        this._goods = goods,
        this._$goodsListContainer = document.querySelector('.items')
    }
    renderGoodsList(){
        const goodsList = this._goods.map( function(good) {
            return good.render()
        }).join('');

        this._$goodsListContainer.insertAdjacentHTML('afterbegin' , goodsList)
    }
}

const list = new GoodsList([
    new Goods('Bread', 100),
    new Goods('Fish', 120),
    new Goods('Meat', 10),
    new Goods('Vegetable', 50),
])

list.renderGoodsList();