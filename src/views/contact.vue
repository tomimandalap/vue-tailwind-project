<template>
  <div>
    <Jumbotron :title="title" :subtitle="subtitle" :imgcover="imgcover" />
    <div class="md:py-28 sm:py-20 py-10 px-0 bg-gray-50">
      <div class="lg:container md:container container mx-auto px-5">
        <form @submit.prevent="handlesubmit">
          <div class="grid gap-6 mb-6 lg:grid-cols-2">
            <div class="text-left">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-black"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                v-model="form.name"
                class="h-10 p-3 border-[1px] focus:ring-purple-700 focus:border-purple-700 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                placeholder="John"
                required
              />
            </div>

            <div class="text-left">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                v-model="form.email"
                class="h-10 p-3 border-[1px] focus:ring-purple-700 focus:border-purple-700 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                placeholder="jhon@mail.com"
                required
              />
            </div>
          </div>

          <div class="grid gap-6 mb-6 lg:grid-cols-1">
            <div class="text-left">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-black"
              >
                Description
              </label>
              <textarea
                id="description"
                v-model="form.description"
                class="p-3 border-[1px] shadow-sm focus:ring-purple-700 focus:border-purple-700 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="description..."
                required
              />
            </div>

            <div class="sm:text-right text-center">
              <button
                type="submit"
                class="py-1 px-5 bg-purple-700 rounded-md border-purple-700 dark:text-white hover:bg-purple-800 sm:w-36 w-full border-[1px]"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
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
      form: {
        name: '',
        email: '',
        description: '',
      },
    }
  },
  methods: {
    handlesubmit() {
      setTimeout(() => {
        alert('Submit Success')
        Object.assign(this.form, { name: '', email: '', description: '' })
      }, 500)
    },
  },
}
</script>
