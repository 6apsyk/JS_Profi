Vue.component('site-header', {
    template: `<div class="header">
                    <div class="container">
                        <div class="leftHeader">
                            <img @click="logoClickHandler" src="images/logo.png" alt="">
                            <img class="searchIcon" src="images/search.png" alt="">
                            <div class="leftHeader-input hidden">
                                <input class="input-search" type="text">
                                <button class="search-button">Искать</button>
                                <div class="filter-card"></div>
                            </div>
                        </div>

                        <div class="rightHeader">
                            <img src="images/bars.png" alt="">
                            <img class="userIcon" src="images/user.png" alt="">

                            <span class="cartIconWrap">
                                <img @click="cartBtnHandler" class="cartIcon" src="images/cart.png" alt="">
                                <span class="old-counter">{{ count }}</span>
                                <!-- <p class="new-counter">0</p> -->
                                
                            </span>
                            <div class="basket hidden">
                                <div class="basketHeader">
                                    <div>Название товара</div>
                                    <div>Количество</div>
                                    <div>Цена за шт.</div>
                                    <div>Итого</div>
                                </div>
                                <div class="basketTotal">
                                    <div>Товаров на сумму:$<span class="basketTotalValue">0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,
    methods: {
        cartBtnHandler() {
            this.$emit('goTo', 'cart')
        },
        logoClickHandler() {
            this.$emit('goTo', 'index')
        }
    },
    props: ['count']
})

Vue.component('top', {
    template: `<div class="newArrivals">
                    <div class="container">
                        <h1>NEW ARRIVALS</h1>
                        <nav>
                            <a href="#">HOME</a>
                            <span>/</span>
                            <a href="#">MEN</a>
                            <span>/</span>
                            <a href="#">NEW ARRIVALS</a>
                        </nav>
                    </div>
                </div>`
})

Vue.component('offer', {
    template: `<div class="filters">
                    <div class="container">
                        <div class="filtersLeft">
                            <span class="filterLabel">FILTER</span>
                            <img class="filterIcon" src="images/filter.svg" alt="">
                            <div class="filterPopup hidden">
                                <nav class="filterCategory">
                                    <div class="filterCategoryHeader">CATEGORY</div>
                                    <div class="hidden">
                                        <a href="#">Accessories</a>
                                        <a href="#">Bags</a>
                                        <a href="#">Denim</a>
                                        <a href="#">Hoodies & Sweatshirts</a>
                                        <a href="#">Jackets & Coats</a>
                                        <a href="#">Polos</a>
                                        <a href="#">Shirts</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Sweaters & Knits</a>
                                        <a href="#">T-Shirts</a>
                                        <a href="#">Tanks</a>
                                    </div>
                                </nav>
                                <nav class="filterCategory">
                                    <div class="filterCategoryHeader">BRAND</div>
                                    <div class="hidden">
                                        <a href="#">Accessories</a>
                                        <a href="#">Bags</a>
                                        <a href="#">Denim</a>
                                        <a href="#">Hoodies & Sweatshirts</a>
                                        <a href="#">Jackets & Coats</a>
                                        <a href="#">Polos</a>
                                        <a href="#">Shirts</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Sweaters & Knits</a>
                                        <a href="#">T-Shirts</a>
                                        <a href="#">Tanks</a>
                                    </div>
                                </nav>
                                <nav class="filterCategory">
                                    <div class="filterCategoryHeader">DESIGNER</div>
                                    <div class="hidden">
                                        <a href="#">Accessories</a>
                                        <a href="#">Bags</a>
                                        <a href="#">Denim</a>
                                        <a href="#">Hoodies & Sweatshirts</a>
                                        <a href="#">Jackets & Coats</a>
                                        <a href="#">Polos</a>
                                        <a href="#">Shirts</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Sweaters & Knits</a>
                                        <a href="#">T-Shirts</a>
                                        <a href="#">Tanks</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="filtersRight">
                            <div class="filterTrending">
                                TRENDING NOW
                                <img src="images/filterArrow.svg" alt="">
                            </div>
                            <div class="filterSize">
                                <div class="filterSizeWrap">
                                    SIZE
                                    <img src="images/filterArrow.svg" alt="">
                                </div>
                                <div class="filterSizes hidden">
                                    <div>
                                        <input type="checkbox"> XS
                                    </div>
                                    <div>
                                        <input type="checkbox"> S
                                    </div>
                                    <div>
                                        <input type="checkbox"> M
                                    </div>
                                    <div>
                                        <input type="checkbox"> L
                                    </div>
                                </div>
                            </div>
                            <div class="filterPrice">
                                PRICE
                                <img src="images/filterArrow.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>`
})

Vue.component('card', {
    template: `<div class="featuredItem">
                    <div class="featuredImgWrap">
                        <img v-bind:src="'images/featured/' + good.image" alt="">
                        <div class="featuredImgDark">
                            <button v-on:click="addToCartHandler" data-productId="good.id">
                                <img src="images/cart.svg" alt="">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div class="featuredData">
                        <div class="featuredName">
                            {{ good.title }}
                        </div>
                        <div class="featuredText">
                            {{ good.description }}
                        </div>
                        <div class="featuredPrice">
                            {{ good.price }}
                        </div>
                    </div>

                </div>`,
    props: ['good'],
    methods: {
        addToCartHandler() {
            this.$emit('add-to-cart', this.good.id)//id="card-good.id"
        }
    }
})

Vue.component('good-list', {
    template: `<div class="featured container">
                    <h2 class="featuredHeader">Fetured Items</h2>
                    <div class="featuredTitle">Shop for items based on what we featured in this week</div>

                    <div class="featuredItems">

                    <card v-for="good of list" v-bind:good="good" v-on:add-to-cart="addToCartHandler"></card>

                    </div>
                </div>`,
    props: ['list'],
    methods: {
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    }
})

Vue.component('item-basket', {
    template: `<div class="featuredItem">
                    <div class="featuredImgWrap">
                        <img v-bind:src="'images/featured/' + item.image" alt="">
                        <div class="featuredImgDark">
                            <button v-on:click="deleteFromCartHandler" data-productId="item.id">
                                <img src="images/cart.svg" alt="">
                                Delete Cart
                            </button>
                        </div>
                    </div>

                    <div class="featuredData">
                        <div class="featuredName">
                            {{ item.title }}
                        </div>
                        <div class="featuredText">
                            {{ item.description }}
                        </div>
                        <div class="featuredPrice">
                            {{ item.price }}
                        </div>
                    </div>

                </div>`,
    props: ['item'],
    methods: {
        deleteFromCartHandler() {
            this.$emit('delete-cart', this.item.id)//id="card-item.id"
        }
    }
})

Vue.component('basket',{
    template:  `<div class="featured container">
                    <h2 class="featuredHeader">Fetured Items</h2>
                    <div class="featuredTitle">Shop for items based on what we featured in this week</div>

                    <div class="featuredItems">

                    <item-basket v-for="item of cart" v-bind:item="item" v-on:delete-cart="deleteFromCartHandler"></item-basket>

                    </div>
                </div>`,
    props: ['cart'],
    methods: {
        deleteFromCartHandler(id) {
            this.$emit('delete-cart', id)
        }
    }
})


Vue.component('index-page', {
    template: `<div>
        <site-header @goTo="goToHandler" v-bind:count="count"></site-header>
        <top></top>
        <offer></offer>
        <good-list v-bind:list="list" @add-to-cart="addToCartHandler"></good-list>
    </div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        },
       
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    },
    props: ['list', 'count']
})

Vue.component('cart-page', {
    template: `<div>
        <site-header @goTo="goToHandler" v-bind:count="count"></site-header>
        <h1>Basket</h1>
        <basket v-bind:cart="cart" @delete-cart="deleteFromCartHandler"></basket>
    </div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        },
        deleteFromCartHandler(id) {
            this.$emit('delete-cart', id)
        }
        
    },
    props: ['count']
})


const app = new Vue({
    el: '#app',
    data: {
        currentPage: 'index',
        list: [
                {"id": 45,"title" : "Puma", "image" : "1.jpg", "description" : "Sports wear", "price" : 100},
                {"id": 46,"title" : "Nike", "image" : "2.jpg", "description" : "Sports wear", "price" : 10},
                {"id": 41,"title" : "adidas", "image" : "3.jpg", "description" : "Sports wear", "price" : 150},
                {"id": 48,"title" : "Umbro", "image" : "4.jpg", "description" : "Sports wear", "price" : 200},
                {"id": 49,"title" : "H&M", "image" : "5.jpg", "description" : "Sports wear", "price" : 70},
                {"id": 40,"title" : "Zara", "image" : "6.jpg", "description" : "Sports wear", "price" : 50}
            ],
        cart: []
    },
    methods: {
        goToHandler(target) {
            this.currentPage = target
        },
        addToCartHandler(id) {
            const good = this.list.find(g => g.id === id);
            this.cart.push(good);
            console.log(this.cart)
        },
        deleteFromCartHandler(id){
            if (this.cart.length !== 0){
            this.cart = this.cart.filter(good => good.id !== id)
            }
        }
    }
})

app.cart = [{"id": 40,"title" : "Zara", "image" : "6.jpg", "description" : "Sports wear", "price" : 50}]