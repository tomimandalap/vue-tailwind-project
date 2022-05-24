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
  name: 'Index',
  components: {
    Jumbotron,
    Myreasonwork,
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
