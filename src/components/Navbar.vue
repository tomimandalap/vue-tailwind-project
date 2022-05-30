<template>
  <div class="bg-slate-100 fixed top-0 left-0 right-0" style="z-index: 1">
    <nav
      :class="[
        'sm:container mx-auto flex flex-wrap justify-between sm:px-0 sm:px-5 px-3 transition-all ',
        {
          'h-16 items-center duration-200 ease-in': !stateMenu,
          'h-48 items-start py-5 shadow-md duration-400 ease-out': stateMenu,
        },
      ]"
    >
      <div>
        <router-link to="/">
          <h4 class="font-bold text-purple-700">Twincode</h4>
        </router-link>
      </div>
      <!-- small to up -->
      <div class="sm:block hidden">
        <button
          type="button"
          class="border border-purple-700 text-purple-700 rounded-lg px-8 py-1 mr-5"
          @click="$router.push('/portfolio')"
        >
          Portfolio
        </button>
        <button
          type="button"
          class="rounded-lg bg-purple-700 text-white px-8 py-1"
          @click="$router.push('/contact')"
        >
          Say, Hello
        </button>
      </div>

      <!-- xsmall or mobile -->
      <div class="sm:hidden block">
        <button
          type="button"
          :class="[
            'border border-purple-700 text-purple-700 rounded-lg px-2',
            { 'py-2': !stateMenu, 'py-1 -mt-5 ': stateMenu },
          ]"
          @click="showMenu"
        >
          <svg
            v-if="!stateMenu"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-primary inline-block h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="fill-primary inline-block h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex flex-col justify-start items-center text-left"
        v-for="(item, i) in isMenu"
        v-show="stateMenu"
        :key="i"
      >
        <span
          :class="[
            'w-full cursor-pointer py-2 text-purple-700',
            { 'font-bold cursor-default': url_active == item.url },
            { 'hover:text-purple-500': url_active != item.url },
          ]"
          @click="handleUrl(item.url)"
        >
          {{ item.name }}
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      url_active: '',
      stateMenu: false,
      isMenu: [
        {
          name: 'Dasboard',
          url: '/',
        },
        {
          name: 'Portfolio',
          url: '/portfolio',
        },
        {
          name: 'Contact',
          url: '/contact',
        },
      ],
    }
  },
  mounted() {
    this.url_active = this.$route.path
  },
  methods: {
    showMenu() {
      this.stateMenu = !this.stateMenu
    },
    handleUrl(url) {
      this.url_active = url
      this.$router.push(url).catch(() => {})
      this.stateMenu = false
    },
  },
}
</script>
