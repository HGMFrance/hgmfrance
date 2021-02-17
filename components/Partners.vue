<template>
  <section
    class="flex items-center justify-center py-16 border-t border-gray-300 bg-gray-50"
  >
    <div
      class="flex flex-row max-w-full overflow-x-auto lg:max-w-5xl xl:max-w-7xl px-8 lg:px-0"
    >
      <img
        v-for="(image, i) in images"
        :key="`image-${i}`"
        class="px-3 py-3 mr-6 inline-block w-40 h-auto rounded-md border bg-white border-gray-100"
        :src="image"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>
