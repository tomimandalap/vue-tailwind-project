<template>
  <LayoutDefault>
    <Jumbotron :title="title" :subtitle="subtitle" :imgcover="imgcover" />

    <div class="md:py-28 sm:py-20 py-10 px-0 text-center bg-gray-50">
      <div class="lg:container md:container container mx-auto px-5">
        <h1
          class="font-bold md:text-3xl sm:text-2xl text-lg w-full sm:mb-6 mb-2.5"
        >
          My Tools
          <span class="text-purple-700">Work</span>
        </h1>

        <p class="sm:text-base text-sm mx-auto max-w-4xl">
          I work using the following tools....
        </p>

        <div class="relative md:py-28 sm:py-20 py-10">
          <div class="overflow-hidden relative h-full">
            <div v-for="(item, i) in items" v-show="show_id == i" :key="i">
              <div
                :class="[
                  {
                    'duration-700 ease-in': show_id == i,
                    'duration-200 ease-out': show_id != i,
                  },
                ]"
              >
                <img
                  :src="require(`../assets/images/${item.image}`)"
                  :alt="item.image"
                  class="max-h-max sm:w-60 w-36 mx-auto object-contain object-center"
                />

                <h2
                  class="font-bold lg:text-3xl md:text-2xl sm:text-xl text-sm md:my-8 my-5"
                >
                  {{ item.title }}
                </h2>
              </div>

              <button
                v-show="items.length > 1"
                type="button"
                class="flex absolute top-0 left-0 z-1 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                @click="i > 0 ? onPrev() : ''"
              >
                <span
                  class="inline-flex justify-center items-center sm:w-10 sm:h-10 w-7 h-7 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                  <svg
                    class="sm:w-6 w-4 sm:h-6 h-4 text-white dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </span>
              </button>

              <button
                v-show="items.length > 1"
                type="button"
                class="flex absolute top-0 right-0 z-1 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                @click="i >= items.length - 1 ? '' : onNext()"
              >
                <span
                  class="inline-flex justify-center items-center sm:w-10 sm:h-10 w-7 h-7 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                  <svg
                    class="sm:w-6 w-4 sm:h-6 h-4 text-white dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Myreasonwork />
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/default'
import Jumbotron from '@/components/Jumbotron'
import Myreasonwork from '@/components/Myreasonwork'
export default {
  name: 'Portfolio',
  components: {
    LayoutDefault,
    Jumbotron,
    Myreasonwork,
  },
  data() {
    return {
      title: 'Portfolio',
      subtitle: `“Everything about code is simple things like a magic word”`,
      imgcover: 'bg-portfolio.svg',
      show_id: 0,
      items: [
        {
          image: 'basic.png',
          title: 'HTML, JS & CSS',
        },
        {
          image: 'vue.png',
          title: 'VueJS',
        },
        {
          image: 'nuxt.png',
          title: 'NuxtJS',
        },
        {
          image: 'bootstrap.png',
          title: 'Bootstrap',
        },
        {
          image: 'vuetify.png',
          title: 'Vuetify',
        },
        {
          image: 'tailwind.png',
          title: 'Tailwind',
        },
      ],
    }
  },
  methods: {
    onNext() {
      this.show_id += 1
    },
    onPrev() {
      this.show_id -= 1
    },
  },
}
</script>
