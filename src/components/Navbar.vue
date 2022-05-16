<template>
  <div class="bg-slate-200 fixed top-0 left-0 right-0">
    <nav
      class="lg:container lg:mx-auto flex flex-row justify-between items-center h-16"
    >
      <div>
        <router-link to="/">
          <h4 class="font-bold text-purple-700">Twincode</h4>
        </router-link>
      </div>
      <div>
        <button
          type="button"
          class="border border-purple-700 text-purple-700 rounded-lg px-8 py-1 mr-5"
        >
          Portfolio
        </button>
        <button
          type="button"
          class="rounded-lg bg-purple-700 text-white px-8 py-1"
        >
          Say, Hello
        </button>
      </div>
      <!-- <ul class="flex flex-row justify-center items-center text-white">
        <li class="mx-3"><router-link to="/">Home</router-link></li>
        <li class="mx-3"><router-link to="/">Blog</router-link></li>
        <li class="mx-3"><router-link to="about">About</router-link></li>
      </ul> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
