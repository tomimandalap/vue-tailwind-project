<template>
  <div class="h-100">
    <div class="text-center">
      <h1 class="font-bold sm:text-5xl text-2xl px-5 text-black sm:mt-20">
        {{ title }}
      </h1>
      <p class="text-sm sm:mt-6 mt-3 mb-0 text-black">{{ subtitle }}</p>
      <img
        :src="require(`../assets/images/${imgcover}`)"
        :alt="imgcover"
        class="mx-auto mt-24 mb-0"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Jumbotron',
  props: {
    title: { type: String, default: 'Title' },
    subtitle: { type: String, default: 'Subtitle' },
    imgcover: { type: String, default: '' },
  },
}
</script>
