<template>
  <div class="h-100">
    <div class="text-center">
      <h1 class="font-bold text-5xl text-black">{{ title }}</h1>
      <p class="text-sm mt-6 mb-0 text-black">{{ subtitle }}</p>
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
