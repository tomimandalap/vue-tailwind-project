<template>
  <div>
    <Jumbotron :title="title" :subtitle="subtitle" :imgcover="imgcover" />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
export default {
  name: 'Contact',
  components: {
    Jumbotron,
  },
  data() {
    return {
      imgcover: 'bg-home.svg',
      title: 'Thank for your time! Can i help you today?',
      subtitle:
        'Interested in working together? We should queue up a chat. I will buy the coffee.',
    }
  },
}
</script>
