<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <!-- Header -->
    <HeaderView />

    <main>
      <!-- Hero section -->
      <HeroSection />

      <Screenshot />

      <FAQ />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Screenshot from '~/components/Screenshot.vue';
import Footer from '@takasqr/tw-vue-ui/custom/general/CustomFooter.vue'

const mobileMenuOpen = ref(false)
</script>
