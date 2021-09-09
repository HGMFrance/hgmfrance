<template>
  <nuxt-link to="/actualites" class="relative block w-full bg-orange-200 cursor-pointer">
    <div class="mx-auto max-w-7xl px-4 lg:px-16 py-2 lg:py-3 text-center font-roboto">
      <p class="text-sm lg:text-lg font-source font-bold" v-html="text"></p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
