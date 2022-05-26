<template>
  <div class="md:py-28 sm:py-20 py-10 px-0 text-center">
    <div class="lg:container md:container container mx-auto px-5">
      <h1 class="text-3xl font-bold">
        My Working
        <span class="text-purple-700">Project</span>
      </h1>

      <p class="text-sm mt-6 mb-0">
        Here are a few projects I've worked with tim on recently.
      </p>

      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5 pt-16 pb-16"
      >
        <img
          v-for="item in 6"
          :key="item"
          :src="require('../assets/images/Card 2.png')"
          alt="image-card"
          class="rounded-3xl sm:h-56 w-full hover:blur-sm hover:brightness-50 hover:cursor-pointer"
        />
      </div>

      <h1 class="mx-auto font-bold md:text-2xl sm:text-xl text-lg w-full">
        Do you interested in
        <span class="text-purple-700">collaborating</span>
        or
        <span class="text-purple-700">hiring</span>
        ?
      </h1>

      <p class="mt-2.5 mb-16">
        I'm always open to discussing product work or partnership opportunities.
      </p>

      <button
        type="button"
        class="border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white rounded-lg px-8 py-2"
      >
        Email Me
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Myworkingproject',
}
</script>
