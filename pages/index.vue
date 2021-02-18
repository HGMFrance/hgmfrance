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

    <ItemsSlider title="Nos derniers projets" :slides="projectsSlides" />

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
import ItemsSlider from '@/components/ItemsSlider'

export default {
  components: {
    Carousel,
    ContactBanner,
    Partners,
    StaggeredTextImage,
    ItemsSlider,
  },

  data() {
    return {
      slides: [
        {
          image: require('@/assets/images/slider-mine.jpg'),
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          textColor: 'white',
          description:
            'Aliquam arcu eros, mattis vitae tellus sit amet, commodo dignissim neque.',
          learnMoreLink: 'https://google.com/',
        },
        {
          image: require('@/assets/images/slider-oil.jpg'),
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          textColor: 'dark',
          description:
            'Aliquam arcu eros, mattis vitae tellus sit amet, commodo dignissim neque.',
          learnMoreLink: 'https://google.com/',
        },
        {
          image: require('@/assets/images/slider-welding.jpg'),
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          textColor: 'white',
          description:
            'Aliquam arcu eros, mattis vitae tellus sit amet, commodo dignissim neque.',
          learnMoreLink: 'https://google.com/',
        },
      ],

      projectsSlides: [
        {
          image: require('@/assets/images/post-wind-turbine.jpg'),
          title: 'Wind Turbine',
        },
        {
          image: require('@/assets/images/post-work-complex.jpg'),
          title: 'Altria Warehouse Complex',
        },
        {
          image: require('@/assets/images/post-train.jpg'),
          title: 'Apollo Hill Project',
        },
        {
          image: require('@/assets/images/post-desert-mining.jpg'),
          title: 'Rocky Forge Refinary',
        },
        {
          image: require('@/assets/images/post-cargo.jpg'),
          title: 'Mingo Village Mining',
        },
      ],

      partners: [
        require('@/assets/partners/cl-logo1.png'),
        require('@/assets/partners/cl-logo2.png'),
        require('@/assets/partners/cl-logo3.png'),
        require('@/assets/partners/cl-logo4.png'),
        require('@/assets/partners/cl-logo5.png'),
        require('@/assets/partners/cl-logo6.png'),
      ],
    }
  },
}
</script>
