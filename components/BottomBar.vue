<template>
  <footer
    class="footer-component py-12 px-8 bg-gradient-to-br from-gray-800 to-gray-900"
  >
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row">
      <div class="w-full md:w-64 mr-24 mb-10 md:mb-0">
        <img
          class="block w-10 mb-4"
          alt=""
          src="@/assets/logo/logo-white.png"
        />

        <p class="mb-4 font-normal text-sm text-white">
          Conception de systèmes pour lignes de conditionnement.
        </p>

        <p
          class="flex items-center mb-4 font-medium text-base text-gray-100 underline"
        >
          <Mail class="h-5 w-auto mr-2" />
          <a href="mailto:contact@hgmfrance.fr">contact@hgmfrance.fr</a>
        </p>

        <p
          class="flex items-center font-medium text-base text-gray-100 underline"
        >
          <Phone class="h-5 w-auto mr-2" />
          <a href="tel:+33642871966">+33 6 42 87 19 66</a>
        </p>
      </div>

      <div class="w-full md:w-40 mr-24 mb-10 md:mb-0">
        <h4 class="mb-3 font-bold text-xl text-white">Navigation</h4>

        <ul>
          <li class="my-2">
            <a
              aria-current="page"
              class="flex flex-row items-center font-medium text-base text-gray-100 underline"
              href="/"
            >
              <ChevronRightSmall class="h-5 w-auto" />
              Accueil
            </a>
          </li>

          <li class="my-2">
            <a
              class="flex flex-row items-center font-medium text-base text-gray-100 underline"
              href="#"
            >
              <ChevronRightSmall class="h-5 w-auto" />
              Convoyeurs
            </a>
          </li>

          <li class="my-2">
            <a
              class="flex flex-row items-center font-medium text-base text-gray-100 underline"
              href="#"
            >
              <ChevronRightSmall class="h-5 w-auto" />
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div class="w-full md:w-80">
        <h4 class="mb-3 font-bold text-xl text-white">Services</h4>

        <ul>
          <li class="my-2">
            <p
              class="flex flex-row items-center mb-1 font-medium text-base text-gray-100"
            >
              <ChevronRightSmall class="h-5 w-auto" />
              Service #1
            </p>
          </li>

          <li class="my-2">
            <p
              class="flex flex-row items-center mb-1 font-medium text-base text-gray-100"
            >
              <ChevronRightSmall class="h-5 w-auto" />
              Service #2
            </p>
          </li>

          <li class="my-2">
            <p
              class="flex flex-row items-center mb-1 font-medium text-base text-gray-100"
            >
              <ChevronRightSmall class="h-5 w-auto" />
              Service #3
            </p>
          </li>

          <li class="my-2">
            <p
              class="flex flex-row items-center mb-1 font-medium text-base text-gray-100"
            >
              <ChevronRightSmall class="h-5 w-auto" />
              Service #4
            </p>
          </li>

          <li class="my-2">
            <p
              class="flex flex-row items-center font-medium text-base text-gray-100"
            >
              <ChevronRightSmall class="h-5 w-auto" />
              Service #5
            </p>
          </li>
        </ul>
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
