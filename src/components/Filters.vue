<template>
  <div  class="lg:w-[300px] lg:my-5 lg:pr-8 lg:block sm:m-0 sm:p-0 ">

      <!--Category Section-->
      <div class="flex w-full">
        <h2 class="lg:mx-2 lg:pt-7 sm:m-0 sm:p-0">Category</h2>
        <button 
        @click="openCategory" 
        class="flex flex-1 justify-end lg:my-8 sm:pr-2 ">
        <img src="../assets/img/Plus.png" alt="plus-icon"></button>
      </div>

      <div v-if="isCategoryOpen">
            <div class="bg-white-secondary flex gap-2 p-2 w-full my-2 rounded-3xl mx-2">
              <img src="../assets/img/Search icon.svg" alt="search-icon">
              <button class="text-gray-400">Search by Category</button>
          </div>
          <div v-for="category in categories" :key="category.id">
              <label>
                  <input 
                  type="checkbox"
                  :value="category.id"
                  v-model="category.checked"
                  @change="handleCategoryChange"
                  > {{ category.title }}
              </label>
          </div>
      </div>
          
      

      <!--Brand Section-->
      <div class="sm:hidden lg:block">
          <h2 class="mx-2 pt-7">Brand</h2>
          <div class="bg-white-secondary flex gap-2 p-2 w-full my-2 rounded-3xl mx-2">
              <img src="../assets/img/Search icon.svg" alt="search-icon">
              <button class="text-gray-400">Search by brand</button>
          </div>
          <div v-for="brand in brands" :key="brand.id">
              <label>
                  <input type="checkbox"> {{ brand.title }}
              </label>
          </div>
      </div>
      
  </div>
</template>

<script setup>
import { useProductsStore } from '../store/products';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const categories = ref([])
const brands = ref([])
const productsStore = useProductsStore()
const isCategoryOpen = ref(false)

const openCategory =()=>{
  isCategoryOpen.value = !isCategoryOpen.value
}

onMounted(async () => {
  try {
    const categoryResponse = await axios.get('https://joulia.dashboard.hamburgermenu.app/api/v1/categories')
    console.log('Response API Category:', categoryResponse.data)
    categories.value = categoryResponse.data.data.map((category) => ({
      ...category,
      checked: false,
    }))
  } catch (error) {
    console.log('Error Fetching Category Data', error)
  }

  try {
    const brandResponse = await axios.get('https://joulia.dashboard.hamburgermenu.app/api/v1/brands')
    console.log('Response API brands:', brandResponse.data)
    brands.value = brandResponse.data.data
  } catch (error) {
    console.log('Error Fetching Brands Data', error)
  }
})

const handleCategoryChange = (event) => {
const categoryId = event.target.value
filterProductsByCategory(categoryId)
}

const filterProductsByCategory = () => {
const selectedCategories = categories.value
  .filter((category) => category.checked)
  .map((category) => category.id)
productsStore.fetchProducts(selectedCategories)
}

</script>