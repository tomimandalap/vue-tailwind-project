<template>
  <div>
    <Jumbotron :title="title" :subtitle="subtitle" :imgcover="imgcover" />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
export default {
  name: 'Portfolio',
  components: {
    Jumbotron,
  },
  data() {
    return {
      title: 'Portfolio',
      subtitle: `“Everything about code is simple things like a magic word”`,
      imgcover: 'bg-portfolio.svg',
    }
  },
}
</script>
