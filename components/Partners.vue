<template>
  <section
    class="flex items-center justify-center py-16 border-t border-gray-300 bg-gray-50"
  >
    <div
      class="flex flex-row items-center justify-center lg:max-w-5xl xl:max-w-7xl overflow-x-hidden"
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
