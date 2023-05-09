<template>
  <div id="actualites-page">
    <main>
      <section class="relative lg:mx-auto lg:max-w-screen-lg pt-20 lg:py-24 px-8 lg:px-0">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">Actualités</h1>

        <h3 class="text-lg text-gray-800 mt-4">
          Venez nous rencontrer sur les salons professionnels de l'agroalimentaire et de l'industrie.
        </h3>
      </section>


      <section class="relative lg:mx-auto lg:max-w-screen-lg pb-12">
        <h2 class="lg:mx-auto lg:max-w-screen-lg pt-6 pb-4 px-8 lg:px-0 text-3xl font-bold text-gray-900">Salons à venir</h2>

        <StaggeredTextImage
          title="Prod&Pack 2023"
          text="Nous serons au salon Prod&Pack du 21 au 23 novembre 2023 à Lyon."
          link="https://www.prodandpack.com/"
          :image="ProdAndPackImage"
          inverted
        />

        <h2 class="lg:mx-auto lg:max-w-screen-lg pt-6 pb-4 px-8 lg:px-0 text-3xl font-bold text-gray-900">Salons passés</h2>

        <StaggeredTextImage
          title="CFIA de Rennes"
          text="Nous étions au CFIA de Rennes du 14 au 16 mars 2023."
          link="https://www.cfiaexpo.com/fr"
          :image="Cfia2023Image"
        />

        <StaggeredTextImage
          title="Prod&Pack 2021"
          text="Nous étions au salon Prod&Pack du 16 au 18 novembre 2021 à Lyon."
          link="https://www.prodandpack.com/"
          :image="ProdAndPackImage"
        />

        <StaggeredTextImage
          title="ALINA 2021"
          text="Nous étions au salon ALINA à Bordeaux du 28 au 30 septembre 2021."
          link="https://www.salonalina.com/"
          :image="AlinaImage"
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
import Cfia2023Image from '@/assets/images/salons/cfia-rennes-2023.png'

export default {
  components: { StaggeredTextImage },

  data() {
    return {
      AlinaImage,
      ProdAndPackImage,
      Cfia2023Image,
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
