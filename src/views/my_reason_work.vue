<template>
  <div class="md:py-28 sm:py-20 py-10 px-0">
    <div class="lg:container md:container container mx-auto px-5">
      <img
        :src="require('../assets/images/Card 1.png')"
        alt="image-card"
        class="h-auto w-full hover:cursor-pointer hover:drop-shadow-lg"
      />

      <h1 class="text-3xl font-bold text-center my-10">
        Title
        <span class="text-purple-700">Work {{ id }}</span>
      </h1>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloribus
        dolores quas suscipit sit adipisci commodi maxime rem voluptatem quo
        nesciunt necessitatibus veritatis deserunt aliquam fugiat cum, totam
        sequi iure odio aliquid ut soluta cumque ipsum. Dolore modi nesciunt sit
        et eos reiciendis, omnis voluptate, deserunt eaque incidunt
        reprehenderit ducimus?
      </p>

      <br />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloribus
        dolores quas suscipit sit adipisci commodi maxime rem voluptatem quo
        nesciunt necessitatibus veritatis deserunt aliquam fugiat cum, totam
        sequi iure odio aliquid ut soluta cumque ipsum. Dolore modi nesciunt sit
        et eos reiciendis, omnis voluptate, deserunt eaque incidunt
        reprehenderit ducimus?
      </p>

      <br />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloribus
        dolores quas suscipit sit adipisci commodi maxime rem voluptatem quo
        nesciunt necessitatibus veritatis deserunt aliquam fugiat cum, totam
        sequi iure odio aliquid ut soluta cumque ipsum. Dolore modi nesciunt sit
        et eos reiciendis, omnis voluptate, deserunt eaque incidunt
        reprehenderit ducimus?
      </p>

      <button
        type="button"
        class="border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white rounded-lg px-8 py-2 my-5"
        @click="$router.go(-1)"
      >
        Back
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailReasonWork',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  mounted() {},
}
</script>
