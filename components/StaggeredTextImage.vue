<template>
  <section
    class="flex flex-col lg:flex-row lg:items-center lg:max-w-5xl xl:max-w-7xl px-8 sm:px-16 py-8 lg:py-16 mx-auto"
  >
    <div
      :class="[
        'w-full lg:w-3/5',
        inverted ? 'lg:order-1 lg:pl-16' : 'order-0 lg:pr-16',
      ]"
    >
      <h2
        class="mb-6 text-blue-900 text-2xl max-w-xl leading-tight font-bold font-source"
      >
        {{ title }}
      </h2>

      <div class="text mb-8 lg:mb-0" v-html="text"></div>
    </div>

    <img
      :class="[
        'w-full lg:w-2/5 h-full object-contain rounded-md',
        inverted ? 'mb-8 lg:mb-0' : '',
      ]"
      :src="image"
      alt=""
    />
  </section>
</template>

<script>
export default {
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

.text >>> ul {
  @apply pl-8 text-gray-700;
  list-style-type: circle;
}
</style>
