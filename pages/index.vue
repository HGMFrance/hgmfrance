<template>
  <div>
    <Carousel :slides="slides" />
    <Partners :images="partners" />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Partners from '@/components/Partners'

export default {
  components: { Carousel, Partners },

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

      partners: [
        'http://demo.themenio.com/industrial/image/cl-logo1.png',
        'http://demo.themenio.com/industrial/image/cl-logo2.png',
        'http://demo.themenio.com/industrial/image/cl-logo3.png',
        'http://demo.themenio.com/industrial/image/cl-logo4.png',
        'http://demo.themenio.com/industrial/image/cl-logo5.png',
        'http://demo.themenio.com/industrial/image/cl-logo6.png',
      ],
    }
  },
}
</script>
