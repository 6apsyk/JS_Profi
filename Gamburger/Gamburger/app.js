'use scrict';

class Gamburger {
    constructor(size, stuffing){
        this.size = size,
        this.stuffing = stuffing,
        this.gumbs =  [ {size : 'big',   price : 50, calorii: 40},
                        {size : 'small', price : 25, calorii: 10}],

        this.staffs = [ {stuffing : 'cheese', price : 50, calorii: 40},
                        {stuffing : 'salad',  price : 25, calorii: 5},
                        {stuffing : 'potate', price : 10, calorii: 10}] ,

        this.topps =  [ {topping : 'priprava', price : 5, calorii: 1},
                        {topping : 'mazik', price : 10, calorii: 100}],

        this.msg = '',
        this.priceAll = []
    }

    // Добавить добавку }
    addTopping(topping) {

    }   
     // Убрать добавку }
    removeTopping(topping) {

    }
    // Получить список добавок }
    getToppings(topping) {

    } 
    // Узнать размер гамбургера } 
    getSize() {
        if (this.size === 'small') {
            return  this.msg = 'маленький'
        }else {
            return this.msg = 'большой'
        }     
    }  
    // Узнать начинку гамбургера }
    getStuffing() {
        switch(this.stuffing){
            case 'cheese' : 
                return this.msg = 'c сыром';
                break;
            case 'salad' : 
                return this.msg = 'с салатом';
                break;
            case 'potate' : 
                return this.msg = 'с картофелем';
                break;   
        }
    } 
     // Узнать цену }        
    calculatePrice() {
        
        this.gumbs.forEach( item => {
            if ( item.size === this.size){
                this.priceAll.push(item.price)
            }            
        })
        this.staffs.forEach( item => {
            if ( item.stuffing === this.stuffing){
                this.priceAll.push(item.price)
            }            
        })
        this.topps.forEach( item => {
            if ( item.topping === 'mazik'){
                this.priceAll.push(item.price)
            }            
        })


        return `Цена за бургер ${this.size} ${this.stuffing} ${this.priceAll.reduce((acc,price) => acc + price , 0)} `
    } 
     // Узнать калорийность }    
    calculateCalories() { 
        return this.gumbs.reduce( (acc,item) => acc + item.calorii , 0);
    }
    
    getHTML(){
        return `<div>${this.calculatePrice()}</div>`
    }
    render($container, target = 'afterbegin'){
        $container.insertAdjacentHTML(target, this.getHTML())
    }
      
      
}



