<template>
  <section class="flex py-12 bg-gradient-to-br from-blue-700 to-blue-800">
    <div
      class="flex flex-col lg:flex-row justify-between items-center lg:max-w-5xl xl:max-w-7xl px-8 sm:px-16 w-full mx-auto text-white"
    >
      <div class="mb-4 lg:mb-0">
        <h3
          class="mb-2 text-center lg:text-left font-medium leading-normal text-2xl"
        >
          {{ title }}
        </h3>
        <p
          class="text-center lg:text-left font-normal leading-normal text-base"
        >
          {{ subtitle }}
        </p>
      </div>

      <nuxt-link
        class="inline-flex items-center justify-center px-8 py-3 border-2 rounded-sm border-white font-medium text-sm uppercase transition hover:bg-white hover:text-blue-900"
        to="/contact"
      >
        Contactez-nous
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
}
</script>
