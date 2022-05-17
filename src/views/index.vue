<template>
  <div>
    <Jumbotron :title="title" :subtitle="subtitle" :imgcover="imgcover" />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
export default {
  name: 'Index',
  components: {
    Jumbotron,
  },
  data() {
    return {
      imgcover: 'bg-home.svg',
      title: 'Full-stack Developer & Mentor',
      subtitle: `“Everything about code is simple things like a magic word”`,
    }
  },
}
</script>
