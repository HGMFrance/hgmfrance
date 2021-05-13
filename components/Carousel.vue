<template>
  <section class="slider">
    <div
      v-for="(slide, i) in slides"
      :key="`slide-${i}`"
      :class="['slide-container', currentSlide === i ? 'active' : '']"
    >
      <div
        class="slide"
        :style="{
          'background-image': `url(${slide.image})`,
          'background-position': slide.backgroundPosition || undefined,
        }"
      >
        <div class="slide-backdrop"></div>

        <div class="slide-content-container">
          <h2 :class="['slide-title', slide.textColor]">{{ slide.title }}</h2>
          <p :class="['slide-description', slide.textColor]">
            {{ slide.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="chevron chevron-left" @click="changeSlide('backward')">
      <ChevronLeft />
    </div>

    <div class="chevron chevron-right" @click="changeSlide('forward')">
      <ChevronRight />
    </div>
  </section>
</template>

<script>
import ChevronLeft from '~/assets/heroicons/chevron-left.svg?inline'
import ChevronRight from '~/assets/heroicons/chevron-right.svg?inline'

export default {
  components: { ChevronLeft, ChevronRight },

  props: {
    /** @type {import('vue').PropType<{ image: string; textColor: string; title: string; description: string; backgroundPosition?: string; }[]>} */
    slides: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      currentSlide: 0,
      interval: null,
    }
  },

  mounted() {
    this.setInterval()
  },

  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },

  methods: {
    setInterval() {
      this.interval = setInterval(() => {
        this.changeSlide('forward')
      }, 10000)
    },

    changeSlide(direction) {
      if (direction === 'backward') {
        if (this.currentSlide > 0) {
          this.currentSlide -= 1
        } else {
          this.currentSlide = this.slides.length - 1
        }
      } else if (direction === 'forward') {
        if (this.currentSlide < this.slides.length - 1) {
          this.currentSlide += 1
        } else {
          this.currentSlide = 0
        }
      }

      // When user touch an arrow, we want to clear interval to reset the
      // interval time left before changing slides again. The user could have
      // changed slides at interval - 1s and the slide will change in the next
      // second.
      if (this.interval) {
        clearInterval(this.interval)
        this.setInterval()
      }
    },
  },
}
</script>

<style scoped>
.white {
  @apply text-white;
}

.dark {
  @apply text-gray-700;
}

.slider {
  position: relative;
  height: 568px;
  overflow-x: hidden;
}

.slide-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translateX(-2rem);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-backdrop {
  z-index: 0;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.15);
  pointer-events: none;
}

.slide-container.active {
  transform: translateX(0rem);
  opacity: 1;
  pointer-events: auto;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
}

.slide-content-container {
  z-index: 1;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: 1024px) {
    width: 800px;
    padding: 0 0 0 8.5rem;
  }
}

.slide-title {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.33);
  @apply mb-8 text-2xl lg:text-4xl font-bold uppercase leading-tight;
}

.slide-description {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.33);
  @apply mb-12;
  @apply text-base;
  @apply lg:text-lg;
  @apply font-normal;
}

.learn-more-cta {
  @apply px-6 py-3 mr-6 rounded-sm text-white font-medium bg-blue-700 transition-all hover:bg-blue-800;
}

.chevron {
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 4rem;
  color: #fff;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: flex;
  }
}

.chevron svg {
  width: 3rem;
  height: auto;
}

.chevron-left {
  left: 0;
}

.chevron-right {
  right: 0;
}
</style>
