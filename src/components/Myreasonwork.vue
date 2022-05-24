<template>
  <div class="py-28 px-0 text-center">
    <div class="lg:container md:container container mx-auto px-5">
      <h1 class="text-3xl font-bold">
        My Reason
        <span class="text-purple-700">Work</span>
      </h1>
      <p class="text-sm mt-6 mb-0">
        Here are a few projects I've worked on recently. Do you want to be full
        stack developer?
        <a href="#" target="_blank" class="text-purple-700">Email me</a>
        .
      </p>

      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5 py-16"
      >
        <img
          v-for="item in 6"
          :key="item"
          :src="require('../assets/images/Card 1.png')"
          alt="image-card"
          class="rounded-3xl sm:h-56 w-full"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyreasonWork',
}
</script>
