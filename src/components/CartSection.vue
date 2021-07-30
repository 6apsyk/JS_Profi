<template>
    <div class="flex-box center">
        <form action="#" class="incart">
            <div class="incart__items">

                <CardInCart v-bind:key="good.id" v-bind:good="good" v-for="good of catalog" />

                <p v-if="catalog.length === 0">Корзина пуста!</p>

            </div>
            <div class="incart__buttons">
                <div v-on:click="clearToCard" class="cart-button cart-button-left">CLEAR SHOPPING CART</div>
                <button class="cart-button">CONTINUE SHOPPING</button>
            </div>
        </form>
        <form action="#" class="cart-form">
            <div class="adress">
                <h3 class="adress__heading">SHIPPING ADRESS</h3>
                <input type="text" class="adress__input" placeholder="Bangladesh">
                <input type="text" class="adress__input" placeholder="State">
                <input type="text" class="adress__input" placeholder="Postcode / Zip">
                <button class="adress__button">GET A QUOTE</button>
            </div>
            <div class="summ">
                <h4 class="summ__sub">SUB TOTAL <span class="summ__price-sub">$ {{ cartPrice }}</span></h4>
                <h3 class="summ__total">GRAND TOTAL <span class="summ__price-total">$ {{ cartPrice }}</span></h3>
                <hr class="summ__line">
                <button class="summ__button">PROCEED TO CHECKOUT</button>
            </div>
        </form>
    </div>
</template>


<script>
import CardInCart from './CardInCart.vue'

export default {
    name: 'Catalog',
    components: {
        CardInCart
    },
    computed: {
        catalog() {
            return this.$store.getters.getCart
        },
        cartPrice() {
            return this.$store.getters.getCart.reduce((acc, good) => acc + (good.price * good.quantity), 0);
        },
        
    },
    methods: {
        clearToCard() {
            this.$store.dispatch('delToCart', this.good)
        }
        
    }
}
</script>