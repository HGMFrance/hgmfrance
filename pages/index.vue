<template>
  <div>
    <Carousel :slides="slides" />

    <StaggeredTextImage
      title="Nous sommes une équipe de professionnels qui vous aideront pour mener à bien votre projet."
      text="<p>Vivamus finibus accumsan ultricies orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend consequat metus, ac egestas tortor placerat vehicula. Nulla tincidunt risus nisl, sed iaculis elit dapibus id. Suspendisse quis lorem nibh. Fusce a magna sollicitudin, semper justo a sagittis.</p><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curay. Fusce a magna sollicitudin, semper justo a sagittis est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curay.</p>"
      image="http://demo.themenio.com/industrial/image/photo-sm-main-c.jpg"
    />

    <StaggeredTextImage
      title="Nous fournissons des solutions innovantes pour un progrès durable."
      text="<p>Vivamus finibus accumsan ultricies orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend consequat metus, ac egestas tortor placerat vehicula. Nulla tincidunt risus nisl, sed iaculis elit dapibus id. Suspendisse quis lorem nibh. Fusce a magna sollicitudin, semper justo a sagittis.</p><p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curay. Fusce a magna sollicitudin, semper justo a sagittis est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curay.</p>"
      image="http://demo.themenio.com/industrial/image/post-thumb-b.jpg"
      :inverted="true"
    />

    <Partners :images="partners" />

    <ContactBanner
      title="Vous recherchez une solution adéquate pour votre entreprise?"
      subtitle="Contactez-nous dès aujourd'hui pour une consultation gratuite ou plus d'informations."
    />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import ContactBanner from '@/components/ContactBanner'
import Partners from '@/components/Partners'
import StaggeredTextImage from '@/components/StaggeredTextImage'

export default {
  components: { Carousel, ContactBanner, Partners, StaggeredTextImage },

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
