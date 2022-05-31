<template>
  <div class="LayoutDefault">
    <Navbar />
    <main class="LayoutDefault__main pt-24 pb-0 mb-0 bg-white">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'default',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {}
  },
}
</script>
