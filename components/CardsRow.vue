<template>
  <section
    class="lg:max-w-5xl xl:max-w-7xl px-8 sm:px-16 py-8 lg:py-16 mx-auto"
  >
    <h2
      class="mb-8 text-center text-blue-900 text-2xl leading-tight font-bold font-source"
    >
      {{ title }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(card, i) in cards" :key="`card-${i}`">
        <img
          class="block w-full h-auto mb-6 rounded-md object-contain"
          :src="card.image"
          alt=""
        />

        <h3 class="mb-4 font-bold font-source leading-normal text-xl text-blue-900">
          {{ card.title }}
        </h3>

        <p class="mb-4 text-gray-700">{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
}
</script>
