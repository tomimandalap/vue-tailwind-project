<template>
  <LayoutDefault>
    <Jumbotron :title="title" :subtitle="subtitle" :imgcover="imgcover" />

    <div class="md:py-28 sm:py-20 py-10 px-0 text-center bg-gray-50">
      <div class="lg:container md:container container mx-auto px-5">
        <h1 class="text-3xl font-bold">Wellcome, Nice to meet you!</h1>
        <img
          :src="require('../assets/images/bg-home.svg')"
          alt="image_profile"
          class="flex mx-auto w-52 h-52 border-2 border-black rounded-full md:mt-24 mt-10 mb-5"
        />
        <h4 class="font-bold text-xl">Tomi Mandala Putra</h4>
        <span>Full-stack Developer & Mentor</span>
        <p class="text-base flex mx-auto max-w-4xl mt-6 mb-0">
          Seorang yang mempunyai latar belakang S1 Fisika Intrumentasi, Saya
          memberanikan diri terjun dalam dunia pemprogram web secara otodidak
          dengan berbekal pemahaman dasar yaitu HTML, CSS dan JS. Serta
          mengikuti bootcamp full-stack developer untuk melatih kemampuan dan
          pemahaman tentang Vue, NuxtJS, Bootstrap, Vuetify, Node dan Express.
        </p>

        <div class="my-5">
          <button
            type="button"
            class="bg-purple-700 p-2 rounded-full"
            @click="handleUrl('https://www.youtube.com/duino-elektronik')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-white inline-block h-6 w-6"
              viewBox="0 0 576 512"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              />
            </svg>
          </button>

          <button
            type="button"
            class="bg-purple-700 p-2 mx-2 rounded-full"
            @click="handleUrl('https://www.linkedin.com/in/tomimandalaputra/')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-white inline-block h-6 w-6"
              viewBox="0 0 448 512"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </button>

          <button
            type="button"
            class="bg-purple-700 p-2 rounded-full"
            @click="handleUrl('https://github.com/tomimandalap')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-white inline-block h-6 w-6"
              viewBox="0 0 448 512"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Myreasonwork />

    <div class="md:py-28 sm:py-20 py-10 px-0 text-center bg-gray-50">
      <div class="lg:container md:container container mx-auto px-5">
        <h1
          class="mx-auto font-bold md:text-3xl sm:text-2xl text-lg lg:w-6/12 w-full md:mb-20 sm:mb-12 mb-8"
        >
          I'm proud to have worked and collaborated with some team awesome in
          companies:
        </h1>

        <img
          :src="require('../assets/images/logo.svg')"
          alt="logo.svg"
          class="mx-auto sm:w-16 w-12"
        />
      </div>
    </div>

    <Myworkingproject />

    <div class="md:py-28 sm:py-20 py-10 px-0 text-center bg-gray-50">
      <div class="lg:container md:container container mx-auto px-5">
        <h1
          class="font-bold md:text-3xl sm:text-2xl text-lg w-full sm:mb-6 mb-2.5"
        >
          Testimonials
        </h1>

        <p class="sm:text-base text-sm mx-auto max-w-4xl">
          People I've worked with have said some nice things...
        </p>

        <!-- card testimonial -->
        <div
          class="relative md:py-28 sm:py-20 py-10 bg-white shadow-xl lg:p-12 md:p-8 sm:p-6 p-4 sm:mt-16 mt-10"
        >
          <div
            v-for="(item, i) in items"
            v-show="show_id == i"
            :key="i"
            :class="[
              {
                'duration-700 ease-in-out': show_id == i,
              },
            ]"
          >
            <div class="flex flex-row lg:gap-12 md:gap-8 sm:gap-6 gap-4">
              <img
                :src="require(`../assets/images/${item.image}`)"
                alt="testimonial-image"
                class="lg:basis-1/4 md:basis-4/12 basis-fill w-12 md:block hidden"
              />

              <div class="sm:basis-full text-left flex flex-col justify-center">
                <h1 class="md:text-xl sm:text-xl text-base font-bold">
                  {{ item.name }}
                </h1>

                <p class="sm:text-sm text-xs mt-2.5 md:mb-5 mb-2.5">
                  {{ item.position }}
                </p>

                <p class="sm:text-base text-sm m-0">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <button
              v-show="items.length"
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
              v-show="items.length"
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
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/default'
import Jumbotron from '@/components/Jumbotron'
import Myreasonwork from '@/components/Myreasonwork'
import Myworkingproject from '@/components/Myworkingproject'
export default {
  name: 'Index',
  components: {
    LayoutDefault,
    Jumbotron,
    Myreasonwork,
    Myworkingproject,
  },
  data() {
    return {
      imgcover: 'bg-home.svg',
      title: 'Full-stack Developer & Mentor',
      subtitle: `“Everything about code is simple things like a magic word”`,
      show_id: 0,
      items: [
        {
          name: 'Jhony',
          position: 'Lead UI/UX',
          image: 'people.png',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere iste vero veritatis repudiandae omnis, ipsam repellat eos incidunt tenetur doloribus quidem obcaecati ipsum nisi error rem molestias totam! Rem maxime, eaque quae quis illum recusandae iusto inventore sed tempora accusantium perferendis eum est magni animi! Animi repellat omnis aliquam.',
        },
        {
          name: 'Shinta',
          position: 'Lead FE',
          image: 'people2.jpeg',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere iste vero veritatis repudiandae omnis, ipsam repellat eos incidunt tenetur doloribus quidem obcaecati ipsum nisi error rem molestias totam! Rem maxime, eaque quae quis illum recusandae iusto inventore sed tempora accusantium perferendis eum est magni animi! Animi repellat omnis aliquam.',
        },
      ],
    }
  },
  methods: {
    handleUrl(link) {
      window.open(link)
    },
    onNext() {
      this.show_id += 1
    },
    onPrev() {
      this.show_id -= 1
    },
  },
}
</script>
