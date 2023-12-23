<template>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <li v-for="screenshot in screenshots" :key="screenshot.imageUrl">
            <img class="w-full rounded-2xl object-cover" :src="screenshot.imageUrl" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  const screenshots = [
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/food-additive-7acb1.appspot.com/o/public%2F添加物ストア画像1.png?alt=media&token=12b5252f-1280-4a40-a780-35378cf8d847',
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/food-additive-7acb1.appspot.com/o/public%2F添加物ストア画像2.png?alt=media&token=a7a14def-4255-4125-a626-fa228e5198f2',
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/food-additive-7acb1.appspot.com/o/public%2F添加物ストア画像3.png?alt=media&token=0a00db66-4ee4-4ef0-a2c8-46187f0b9809',
    },
  ]
  </script>