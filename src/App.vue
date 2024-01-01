<template>
  <div>
    <Nav/>
    <div class="container flex gap-2">
      <Filters class="sm:hidden" />
      <Product />
    </div>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';
import Filters from './components/Filters.vue';
import Product from './components/Product.vue';

</script>