<template>
  <section
    class="flex flex-row lg:max-w-5xl xl:max-w-7xl px-8 sm:px-16 py-16 mx-auto"
  >
    <div :class="['w-3/5', inverted ? 'order-1 pl-16' : 'order-0 pr-16']">
      <h2
        class="mb-6 text-blue-900 text-2xl max-w-xl leading-tight font-medium"
      >
        {{ title }}
      </h2>

      <div class="text" v-html="text"></div>
    </div>

    <img class="w-2/5 h-auto rounded-md" :src="image" alt="" />
  </section>
</template>

<script>
export default {
  // props: ['title', 'text', 'image', 'inverted'],

  props: {
    title: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped>
.text >>> p {
  @apply mb-4 font-normal text-base text-gray-700;
}
</style>
