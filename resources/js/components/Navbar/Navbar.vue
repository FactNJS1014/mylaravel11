<template>
  <header class="text-white bg-blue-900">
    <div class="px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold">Tailwind</router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden space-x-10 text-lg md:flex">
          <router-link
            to="/"
            class="text-lg transition-all"
            :class="{ 'text-blue-500 font-semibold bg-white px-2 rounded-lg': $route.path === '/' }"
          >Home</router-link>

          <router-link
            to="/services"
            class="text-lg transition-all"
            :class="{ 'text-blue-500 font-semibold bg-white px-2 rounded-lg': $route.path === '/services' }"
          >Services</router-link>

          <router-link
            to="/about"
            class="text-lg transition-all"
            :class="{ 'text-blue-500 font-semibold bg-white px-2 rounded-lg': $route.path === '/about' }"
          >About Us</router-link>

          <router-link
            to="/contact"
            class="text-lg transition-all"
            :class="{ 'text-blue-500 font-semibold bg-white px-2 rounded-lg': $route.path === '/contact' }"
          >Contact</router-link>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <router-link
            to="/contact"
            class="px-6 py-2 text-lg text-black transition-all bg-yellow-500 rounded-full hover:bg-yellow-400"
          >
            Get in Touch
          </router-link>
        </div>

        <!-- Mobile Toggle Button -->
        <div class="flex items-center md:hidden">
          <button @click="menuOpen = !menuOpen" class="text-white cursor-pointer focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="mt-5 space-y-4 md:hidden">
        <router-link
          to="/"
          class="block text-lg transition-all"
          :class="{ 'text-yellow-300 font-semibold': $route.path === '/' }"
          @click="menuOpen = false"
        >Home</router-link>

        <router-link
          to="/services"
          class="block text-lg transition-all"
          :class="{ 'text-yellow-300 font-semibold': $route.path === '/services' }"
          @click="menuOpen = false"
        >Services</router-link>

        <router-link
          to="/about"
          class="block text-lg transition-all"
          :class="{ 'text-yellow-300 font-semibold': $route.path === '/about' }"
          @click="menuOpen = false"
        >About Us</router-link>

        <router-link
          to="/contact"
          class="block text-lg transition-all"
          :class="{ 'text-yellow-300 font-semibold': $route.path === '/contact' }"
          @click="menuOpen = false"
        >Contact</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const menuOpen = ref(false);
</script>
