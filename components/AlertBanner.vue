<template>
  <div class="relative w-full bg-orange-300">
    <div class="mx-auto max-w-7xl px-4 lg:px-16 py-2 lg:py-3 text-center font-roboto">
      <p class="text-sm lg:text-lg font-bold" v-html="text"></p>
    </div>
  </div>
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
