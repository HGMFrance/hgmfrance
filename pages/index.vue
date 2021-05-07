<template>
  <div id="pages_index">
    <Carousel :slides="slides" />

    <StaggeredTextImage
      title="Solutions de contrôle et d'inspection"
      text="<p>Créée en 2013, H.G.M. conçoit et fabrique des solutions de contrôle et d'inspection pour l'industrie pharmaceutique, cosmétique et agro-alimentaire.</p><p>Fort de plusieurs années d'expérience dans différents secteurs, chaque machine est conçue et développée pour répondre aux attentes de ses clients et accroître qualité et performance.</p>"
      :image="images.convoyeur"
    />

    <StaggeredTextImage
      inverted
      title="Des solutions complètes clés en main"
      :text="`
        <p>A chaque produit, implantation ou besoin, nous vous proposons une solution complète clé en main comme :</p>
        <ul>
          <li>Machine complète standards ou spécifiques</li>
          <li>Intégration de vision dans les machines existantes (étiqueteuse, bouchonneuse, etc.)</li>
          <li>Développement soft et programmation</li>
          <li>Service-après-vente et maintenance à distance</li>
        </ul>
      `"
      :image="images.eos"
    />

    <CardsRow title="Nos services" :cards="serviceCards" />

    <ContactBanner
      title="N'hésitez pas à nous confier votre projet."
      subtitle="Relevés de côtes sur site, proposition de solution et/ou modification, installation et mise en place sur site."
    />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import ContactBanner from '@/components/ContactBanner'
import StaggeredTextImage from '@/components/StaggeredTextImage'
import CardsRow from '@/components/CardsRow'

import ConvoyeurImg from '@/assets/images/hgm/convoyeur-1.jpeg'
import EOSImg from '@/assets/images/hgm/machine-eos.jpeg'

export default {
  components: {
    Carousel,
    ContactBanner,
    StaggeredTextImage,
    CardsRow,
  },

  data() {
    return {
      images: {
        convoyeur: ConvoyeurImg,
        eos: EOSImg,
      },

      slides: [
        {
          image: require('@/assets/images/hgm/guidage-reglable.jpeg'),
          title: 'Convoyeur à guidage réglable',
          textColor: 'white',
          description:
            'Comme les produits de nos clients, les lignes de conditionnement évoluent. HGM vous accompagne sur les modifications, améliorations et aménagements de vos convoyeurs.',
          learnMoreLink: '/',
        },
        {
          image: require('@/assets/images/hgm/controle-etiqueteuse.jpeg'),
          title: 'Contrôle vision',
          textColor: 'white',
          description:
            "Spécialisé dans le contrôle par vision, HGM intègre électriquement et mécaniquement des solutions d'inspection pas caméras ou capteurs sur vos lignes de conditionnement.",
          learnMoreLink: '/',
        },
      ],

      serviceCards: [
        {
          image: require('@/assets/images/hgm/machine-eos-3d.png'),
          title: 'Conception mécanique CAO en 3D',
          description:
            'Etudes, réalisation, intégration et modification de convoyeur à structure aluminium.',
        },
        {
          image: require('@/assets/images/hgm/vis-regroupement.png'),
          title: 'Conception des automatismes',
          description:
            'Etudes, réalisation, intégration et modification de convoyeur à structure aluminium.',
        },
        {
          image: require('@/assets/images/hgm/guidage-transfert.png'),
          title: 'Mise en service des installations et formation du personnel',
          description:
            'Etudes, réalisation, intégration et modification de convoyeur à structure aluminium.',
        },
      ],
    }
  },
}
</script>
