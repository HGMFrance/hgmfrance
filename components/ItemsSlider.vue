<template>
  <section
    class="overflow-x-hidden max-w-full lg:max-w-5xl xl:max-w-7xl px-8 sm:px-16 py-8 lg:py-16 mx-auto pb-8"
  >
    <h2
      class="mb-12 text-center text-blue-900 text-2xl leading-tight font-medium"
    >
      {{ title }}
    </h2>

    <vueper-slides
      class="no-shadow"
      slide-multiple
      arrows-outside
      fixed-height="175px"
      slide-content-outside="bottom"
      :visible-slides="4"
      :gap="3"
      :slide-ratio="1 / 3"
      :dragging-distance="150"
      :breakpoints="{
        425: { visibleSlides: 1, slideMultiple: 1 },
        768: { visibleSlides: 2, slideMultiple: 2 },
        1024: { visibleSlides: 3, slideMultiple: 3 },
      }"
    >
      <template #arrow-left>
        <ChevronLeft />
      </template>

      <template #arrow-right>
        <ChevronRight />
      </template>

      <vueper-slide
        v-for="(slide, i) in slides"
        :key="`slide-${i}`"
        :image="slide.image"
      />
    </vueper-slides>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import ChevronLeft from '@/assets/heroicons/chevron-left.svg?inline'
import ChevronRight from '@/assets/heroicons/chevron-right.svg?inline'

export default {
  components: { VueperSlides, VueperSlide, ChevronLeft, ChevronRight },

  props: {
    title: {
      type: String,
      required: true,
    },

    slides: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.vueperslides {
  @apply px-16 mx-auto;
}

.vueperslides .vueperslide {
  @apply rounded-md;
}
</style>
