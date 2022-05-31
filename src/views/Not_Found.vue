<template>
  <div class="min-h-screen">
    <div
      class="lg:container md:container container absolute mx-auto top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center"
    >
      <h1 class="mb-6">
        <strong class="text-purple-700">404</strong>
        | Not Found!
      </h1>
      <button
        type="button"
        class="px-5 py-2 w-100 rounded-md dark:text-white hover:bg-purple-800 bg-purple-700"
        @click="$router.push('/')"
      >
        Back to dasboard
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Not_Found',
  }
</script>
