<template>
  <!-- Header -->
  <HeaderView />

  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <main>
        <ContentDoc v-slot="{ doc }">
          <article class="prose lg:prose-xl">
            <!-- <h1>{{ doc.title }}</h1> -->
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </main>
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import Footer from '@takasqr/tw-vue-ui/template/Footer/Footer.vue'
</script>