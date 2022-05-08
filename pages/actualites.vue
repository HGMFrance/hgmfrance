<template>
  <div id="actualites-page">
    <main>
      <section class="relative lg:mx-auto lg:max-w-screen-lg pt-20 lg:pt-24 px-8 lg:px-0">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">Actualités</h1>
      </section>

      <section class="relative lg:mx-auto lg:max-w-screen-lg pb-12">
        <StaggeredTextImage
          title="Prod&Pack 2021"
          text="Nous étions au salon Prod&Pack du 16 au 18 novembre 2021 à Lyon."
          link="https://www.prodandpack.com/"
          :image="images[1]"
        />

        <StaggeredTextImage
          title="ALINA 2021"
          text="Nous étions au salon ALINA à Bordeaux du 28 au 30 septembre 2021."
          link="https://www.salonalina.com/"
          :image="images[0]"
          inverted
        />
      </section>
    </main>
  </div>
</template>

<script>
import StaggeredTextImage from '@/components/StaggeredTextImage'

import AlinaImage from '@/assets/images/salons/alina-2021.png'
import ProdAndPackImage from '@/assets/images/salons/prod-and-pack-2021.png'

export default {
  components: { StaggeredTextImage },

  data() {
    return {
      images: [AlinaImage, ProdAndPackImage],
    };
  },

  head() {
    return {
      title: 'H.G.M. France - Actualités',
    };
  },
};
</script>

<style lang="postcss" scoped>
.image-item {
  @apply block h-auto w-56 lg:w-80 p-4 rounded-md;
}
</style>
