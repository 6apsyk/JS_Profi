export default class CardView {
    constructor(good) {
        this._data = good;
        this._addHandlerCb = null;
    }

    getHTML(){
        return `<div class="featuredItem" id="card-${this._data.id}">

        <div class="featuredImgWrap">
            <img src="images/featured/${this._data.image}.jpg" alt="">
            <div class="featuredImgDark">
                <button data-productId="${this._data.id}">
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
                $${this._data.price}
            </div>
        </div>

    </div>`
    }

    render($container, target = 'beforeend'){
        $container.insertAdjacentHTML(target, this.getHTML());
        
        // if (this._addHandler){ не понятна проверка
            
            const addBtn = $container.querySelector(`#card-${this._data.id} .featuredImgWrap .featuredImgDark button`)
    
            addBtn.addEventListener('click', this._addHandler.bind(this))
        // }

    }

    _addHandler() {
        this._addHandlerCb(this._data.id);
    }

    setAddHandler(callback) {
        this._addHandlerCb = callback;
    }
}