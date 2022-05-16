<template>
  <div class="bg-sky-400">
    <nav
      class="lg:container lg:mx-auto flex flex-row justify-between items-center h-14"
    >
      <div>
        <router-link to="/">
          <h4 class="font-bold text-white">Twincode</h4>
        </router-link>
      </div>
      <ul class="flex flex-row justify-center items-center text-white">
        <li class="mx-3"><router-link to="/">Home</router-link></li>
        <li class="mx-3"><router-link to="/">Blog</router-link></li>
        <li class="mx-3"><router-link to="about">About</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
