<template>
    <header class="sticky top-0 bg-white">

        <!--Main Nav-->
       <nav 
       class="container flex justify-center align-middle items-center max-w-7xl mx-auto lg:my-5">

            <h1 class="text-bold text-3xl">LOGO</h1>

            <ul class="flex flex-1 justify-end items-center gap-2">
                <li><img src="../assets/img/remove user.svg" alt="user-icon"></li>
                <li class="lg:block sm:hidden">Account</li>

                <li><img src="../assets/img/Favorite.png" alt="favorite-icon"></li>
                <li class="lg:block sm:hidden">WishList</li>

                <li><img src="../assets/img/cart.png" alt="cart-icon"></li>
                <li class="lg:block sm:hidden ">Cart</li>
            </ul>

        </nav>
       
        <!--Hidden Filters for Mobile View-->
        <div 
        v-if="isOpen" 
        class="bg-white absolute top-0 h-screen w-full transition ease-in-out lg:hidden">

            <div class="flex border-b p-2">
                <h2 class="font-bold">Filter by</h2>
                <button @click="closeMenu" class="flex flex-1 justify-end ">
                    <img src="../assets/img/x.png" alt="close-icon"></button>
            </div>

            <div class="p-2">
                <Filters class="m-0 p-0" />
            </div>

            <div class="flex flex-col flex-1 justify-end">
                <button 
                class="rounded-xl bg-[#00ABEB] mx-2 p-2 text-white" 
                @click="closeMenu">View Items</button>
            </div> 
           
        </div>
        <button 
        @click="openMenu" 
        class="container lg:hidden">
        <img src="../assets/img/Frame 33566.svg" alt="Humburger-btn"></button>
        
    

        <!--Category List-->
        <ul 
        class="container py-3 flex justify-center items-center gap-7 
        bg-white-secondary text-bold lg:flex sm:hidden">
            <li>Groceries</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Furniture</li>
            <li>Toys & Video Games</li>
            <li>Baby</li>
            <li>Beauty</li>
            <li>Personal Care</li>
            <li>Pets</li>
            <li>Sports</li>
            <li>Stationary</li>
            <li>Brands</li>
        </ul>



        <!--Breadcrump-->
        
        <ul 
        class="container flex py-3 items-center gap-2 
        bg-white text-bold lg:flex sm:justify-start sm:ml-0 lg:ml-auto ">
            <li>Home</li>
            <li>/</li>
            <li>Furniture</li>
            <li class="text-gray-400">/</li>
            <li class="text-gray-400">Dining Room Tables</li>
        </ul>

        <h2 class="container text-xl py-4 lg:ml-auto sm:ml-0">Dining Room Tables</h2> 
    </header>
</template>

<script setup>
import { ref } from 'vue';
import Filters from './Filters.vue';

const isOpen = ref(false)


const openMenu = ()=>{
    isOpen.value = !isOpen.value
}

const closeMenu = ()=>{
    isOpen.value = false
}


</script>