<template>
  <div 
  class="grid grid-cols-4 grid-rows-7 gap-6 max-w-4xl mx-auto my-5 lg:grid-cols-4 sm:grid-cols-2">
    <div v-for="product in filteredProducts" :key="product.id">
      <img :src="product.default_variant.image" :alt="product.title">
      <p>{{ product.title }}</p>
      <p>{{ product.default_variant.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useProductsStore } from '../store/products';

const productsStore = useProductsStore()
const filteredProducts = computed(() => productsStore.products)

onMounted(() => {
  productsStore.fetchProducts() 
})

</script>