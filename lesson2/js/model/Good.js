import idGeneration from "../utils/idGeneration.js"


export default class Good {
    constructor({title, image, description, price}){
        this.title = title,
        this.description = description,
        this.image = image,
        this.price = price,
        this.id = idGeneration()
    }

    getPrice(){
        return this.price
    }
}