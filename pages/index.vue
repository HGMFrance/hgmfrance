<template>
  <div>
    <Carousel :slides="slides" />

    <div class="lg:max-w-5xl xl:max-w-7xl mx-auto px-16"></div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  components: { Carousel },

  data() {
    return {
      slides: [
        {
          image: 'http://demo.themenio.com/industrial/image/slider-mine-a.jpg',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          textColor: 'white',
          description:
            'Aliquam arcu eros, mattis vitae tellus sit amet, commodo dignissim neque.',
          learnMoreLink: 'https://google.com/',
        },
        {
          image: 'http://demo.themenio.com/industrial/image/slider-oil-a.jpg',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          textColor: 'dark',
          description:
            'Aliquam arcu eros, mattis vitae tellus sit amet, commodo dignissim neque.',
          learnMoreLink: 'https://google.com/',
        },
        {
          image:
            'http://demo.themenio.com/industrial/image/slider-welding-b.jpg',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          textColor: 'white',
          description:
            'Aliquam arcu eros, mattis vitae tellus sit amet, commodo dignissim neque.',
          learnMoreLink: 'https://google.com/',
        },
      ],
    }
  },
}
</script>
