<template>
  <nav class="fixed z-10 w-full bg-white shadow-lg">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#" class="flex items-center flex-shrink-0">
            <img class="w-auto h-8" src="https://tailwindflex.com/images/logo.svg" alt="Logo">
            <span class="ml-2 text-xl font-bold text-gray-800">Company</span>
          </a>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <router-link
              v-for="link in links"
              :key="link.name"
              :to="link.path"
              :class="[
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                isActive(link.path)
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              ]"
              @click="setActive(link.path)"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <div class="hidden md:ml-4 md:flex md:items-center">
            <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign Up
            </button>
          </div>
          <div class="flex items-center md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              @click="toggleMobileMenu"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="md:hidden"
      id="mobile-menu"
      v-if="isMobileMenuOpen"
    >
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          v-for="link in links"
          :key="'mobile-' + link.name"
          :to="link.path"
          :class="[
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
            isActive(link.path)
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
          ]"
          @click="setActive(link.path); toggleMobileMenu()"
        >
          {{ link.name }}
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <button class="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </nav>

  <div class="pt-16">
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="flex items-center justify-center border-4 border-gray-200 border-dashed rounded-lg h-96">
          <p class="text-xl text-gray-500">Page Content Goes Here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activePath = ref(route.path);
const isMobileMenuOpen = ref(false);

const links = ref([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]);

const setActive = (path) => {
  activePath.value = path;
};

const isActive = (path) => {
  return activePath.value === path;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  // Ensure the active link is set on initial load
  setActive(route.path);
});
</script>

<style scoped>
/* You can add component-specific styles here if needed */
</style>
