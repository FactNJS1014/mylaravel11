<template>
    <div>
        <NavigationBar />
        <div class="pt-16">
            <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div
                        class="flex items-center justify-center border-4 border-gray-200 border-dashed rounded-lg h-96">
                         <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import NavigationBar from './Navbar/Navbar.vue';
</script>
