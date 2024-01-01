import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts(categoryIds = []) {
      console.log('Fetching Products with Category IDs:', categoryIds)
      try {
        let api = 'https://joulia.dashboard.hamburgermenu.app/api/v1/products'
        
        if (categoryIds.length > 0) {
          api += `?filter[categories]=${categoryIds.join(',')}`
        }
        
        const response = await axios.get(api)
        this.products = response.data.data
      } catch (error) {
        console.error('Error Fetching Products:', error)
      }
    },
  },
})