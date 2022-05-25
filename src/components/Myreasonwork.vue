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
        class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5 pt-16 pb-16"
      >
        <img
          v-for="item in 6"
          :key="item"
          :src="require('../assets/images/Card 1.png')"
          alt="image-card"
          class="rounded-3xl sm:h-56 w-full hover:cursor-pointer hover:drop-shadow-lg"
        />
      </div>
    </div>

    <button
      type="button"
      class="border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white rounded-lg px-8 py-2"
    >
      See More
    </button>
  </div>
</template>
<script>
export default {
  name: 'MyreasonWork',
}
</script>
