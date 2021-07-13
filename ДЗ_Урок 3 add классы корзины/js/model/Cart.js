import GoodList from "./GoodList.js";

export default class Cart extends GoodList{
    constructor(goodsData){
        super(goodsData);
    }

    //Общая сумма покупки
    getPrice(){
        return this.goods.reduce((acc,good) => acc + good.price, 0)
    }

    add(newGood){
        const oldGood = this.goods.find(good => good.id === newGood.id)

        if (oldGood){
            oldGood.add()
        }else {
            this.goods.push(newGood)
        }
    }
}