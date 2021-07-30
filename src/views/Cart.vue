<template>
  <div class="cart">
    <Breadcrumbs />
    <CartSection />
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import CartSection from '../components/CartSection.vue'
import CardInCart from '../components/CardInCart.vue'

export default {
    name: 'Cart',
    components: {
        Breadcrumbs,
        CardInCart,
        CartSection
    }
}
</script>