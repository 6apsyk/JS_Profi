
export default class Card{
    constructor(good, quantity){
        this._data = good,
        this.quantity = quantity
    }
    getHTML(){
        return `<div class="featuredItem">

        <div class="featuredImgWrap">
            <img src="images/featured/${this._data.image}.jpg" alt="">
            <div class="featuredImgDark">
                <button data-productId="${this._data.id - this.quantity }">
                    <img src="images/cart.svg" alt="">
                    Add to Cart
                </button>
            </div>
        </div>

        <div class="featuredData">
            <div class="featuredName">
                ${this._data.title}
            </div>
            <div class="featuredText">
                ${this._data.description}
            </div>
            <div class="featuredPrice">
                $${this._data.getPrice()}
            </div>
        </div>

    </div>`
    }
    render($container, target = 'beforeend'){
        $container.insertAdjacentHTML(target, this.getHTML())
    }
    clear($container){
        return $container.innerHTML = ''
    }
}