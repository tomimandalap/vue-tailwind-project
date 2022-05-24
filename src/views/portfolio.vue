<template>
  <div>
    <Jumbotron :title="title" :subtitle="subtitle" :imgcover="imgcover" />
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
    }
  },
}
</script>
