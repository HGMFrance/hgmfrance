<template>
  <footer class="py-12 px-8 bg-gradient-to-br from-gray-800 to-gray-900">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row text-white">
      <div class="w-full md:w-64 mr-16 mb-10 md:mb-0">
        <img
          class="block w-16 h-auto mb-4"
          alt=""
          src="@/assets/logo/hgm-white-transparent.png"
        />

        <p class="mb-4 text-sm">
          Conception de systèmes pour lignes de conditionnement.
        </p>

        <p class="contact-item mb-4">
          <Mail class="contact-icon" />
          <a href="mailto:contact@hgmfrance.com">contact@hgmfrance.com</a>
        </p>

        <p class="contact-item">
          <Phone class="contact-icon" />
          <a href="tel:+33164707734">+33 1 64 70 77 34</a>
        </p>
      </div>

      <div class="w-full md:w-40 mr-16 mb-10 md:mb-0">
        <h4 class="category-title">Navigation</h4>

        <ul>
          <li class="my-2">
            <nuxt-link class="navigation-link" to="/">
              <ChevronRightSmall class="h-5 w-auto" />
              Accueil
            </nuxt-link>
          </li>

          <li class="my-2">
            <nuxt-link class="navigation-link" to="/actualites">
              <ChevronRightSmall class="h-5 w-auto" />
              Actualités
            </nuxt-link>
          </li>

          <li class="my-2">
            <nuxt-link class="navigation-link" to="/contact">
              <ChevronRightSmall class="h-5 w-auto" />
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="w-full md:w-40 mr-16 mb-10 md:mb-0"></div>

      <div class="w-full md:w-56">
        <h4 class="category-title">Contact</h4>

        <p class="mb-1 font-medium">H.G.M. France</p>
        <p>3 Rue Paul Tavernier</p>
        <p class="mb-3">77300 Fontainebleau, FR</p>

        <p>Tél. fixe: +33 1 64 70 77 34</p>
      </div>
    </div>
  </footer>
</template>

<script>
import ChevronRightSmall from '@/assets/heroicons/chevron-right-small.svg?inline'
import Mail from '@/assets/heroicons/mail.svg?inline'
import Phone from '@/assets/heroicons/phone.svg?inline'

export default {
  components: { ChevronRightSmall, Mail, Phone },
}
</script>

<style lang="postcss" scoped>
.category-title {
  @apply mb-3 font-bold font-source text-xl;
}

.contact-item {
  @apply flex items-center font-medium text-gray-100 underline;
}

.contact-icon {
  @apply h-5 w-auto mr-2;
}

.navigation-link {
  @apply flex flex-row items-center font-medium text-gray-100 underline;
}
</style>
