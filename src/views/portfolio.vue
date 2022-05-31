<template>
  <div>
    <Jumbotron :title="title" :subtitle="subtitle" :imgcover="imgcover" />

    <div
      id="controls-carousel"
      class="relative md:py-28 sm:py-20 py-10"
      data-carousel="static"
    >
      <!-- Carousel wrapper -->
      <div class="overflow-hidden relative h-full md:h-80">
        <div v-for="(item, i) in items" v-show="show_id == i" :key="i">
          <div
            :class="[
              {
                'duration-700 ease-in': show_id == i,
                'duration-200 ease-out': show_id != i,
              },
            ]"
            data-carousel-item
          >
            <img
              :src="require(`../assets/images/${item.image}`)"
              :alt="item.image"
              class="w-full max-h-max"
            />
          </div>

          <button
            type="button"
            class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
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
            type="button"
            class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
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

    <Myreasonwork />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
import Myreasonwork from '@/components/Myreasonwork'
export default {
  name: 'Portfolio',
  components: {
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
          image: 'bg-home.svg',
        },
        {
          image: 'bg-portfolio.svg',
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
