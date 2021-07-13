import idGeneration from "../utils/idGeneration.js"


export default class Good {
    constructor({title, image, description, price}){
        this.title = title;
        this.description = description;
        this.image = image;
        this._price = price; // _price приватная часть
        this.id = idGeneration();
    }

    get price(){  // геттер
        return this._price
    }
    
    set price(value){   //сеттер
        this._price = value
    }
}