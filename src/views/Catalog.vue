<template>
    <div id="catalog">
        <NewArrivals />
    </div>
</template>

<script>
import NewArrivals from '../components/NewArrivals.vue'

export default ({
    name: 'Catalog',
    components: {
        NewArrivals,
    }
})
</script>
