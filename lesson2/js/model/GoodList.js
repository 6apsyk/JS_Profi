import Good from "./Good.js"


export default class GoodList{
    constructor(goods){
        this.goods = goods.map(function(item){
            return new Good(item)
        })
    }
    get(){
        return this.goods
    }

    add(good){
        return this.goods.push(new Good(good))
    }

    remove(id){
        const ID = this.goods.findIndex(good => good.id === id )
        this.goods.splice(ID, 1)
    }
}