import Good from "./Good.js";

export default class GoodInCart extends Good{
    constructor({title,description,images, _price, id}, quantity = 1){
        super({title,description,images, _price, id});
        this.quantity = quantity;
        this.id = id;
    }

    get price(){
        return this._price  * this.quantity
    }

    add(){
        return this.quantity++;
    }

}