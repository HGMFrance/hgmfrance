<template>
  <div id="actualites-page">
    <main>
      <section class="relative lg:mx-auto lg:max-w-screen-lg pt-20 lg:pt-24 px-8 lg:px-0">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">Actualités</h1>
      </section>

      <section class="relative lg:mx-auto lg:max-w-screen-lg pb-12">
        <StaggeredTextImage
          title="CFIA Rennes 2021"
          text="Retrouvez-nous au CFIA avec notre partenaire TSEIN à Rennes, du 9 au 11 juin 2021."
          :image="images[0]"
        />

        <StaggeredTextImage
          title="ALINA 2021"
          text="Nous serons également présents au salon ALINA à Bordeaux du 28 au 30 septembre 2021."
          :image="images[1]"
          inverted
        />

        <StaggeredTextImage
          title="Prod&Pack 2021"
          text="Nous vous attendons aussi au salon Prod&Pack du 16 au 18 novembre 2021 à Lyon."
          :image="images[2]"
        />
      </section>
    </main>
  </div>
</template>

<script>
import StaggeredTextImage from '@/components/StaggeredTextImage'

import CfiaImage from '@/assets/images/salons/cfia-2021.png'
import AlinaImage from '@/assets/images/salons/alina-2021.png'
import ProdAndPackImage from '@/assets/images/salons/prod-and-pack-2021.png'

export default {
  components: { StaggeredTextImage },

  data() {
    return {
      images: [CfiaImage, AlinaImage, ProdAndPackImage],
    };
  },
};
</script>

<style lang="postcss" scoped>
.image-item {
  @apply block h-auto w-56 lg:w-80 p-4 rounded-md;
}
</style>
