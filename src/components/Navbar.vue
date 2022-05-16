<template>
  <div class="bg-slate-200 fixed top-0 left-0 right-0">
    <nav
      class="lg:container md:container lg:mx-auto md:mx-auto flex flex-row justify-between items-center h-16"
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
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
