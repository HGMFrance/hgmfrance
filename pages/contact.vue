<template>
  <div id="contact-page">
    <main>
      <section class="relative lg:mx-auto lg:max-w-screen-lg pt-20 lg:pt-24 pb-8 px-8 lg:px-0">
        <h1 class="mb-4 lg:mb-8 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">Contact</h1>

        <p class="max-w-2xl mb-12 text-base xs:text-lg md:text-xl font-normal text-gray-500">
          Remplissez ce formulaire de contact afin de nous faire part de votre projet, nous vous recontacterons le
          plus rapidement possible.
        </p>

        <div class="w-full shadow-lg rounded-md">
          <div class="flex flex-col lg:flex-row h-full w-full rounded-md">
            <div class="w-full lg:w-2/5 py-4 md:py-6 px-6 md:px-8 rounded-t-lg lg:rounded-t-none lg:rounded-l-lg bg-gradient-to-br from-blue-700 to-blue-900">
              <p class="mb-6 text-white text-lg font-medium">Informations de contact</p>

              <p class="flex items-center mb-4 font-inter font-medium text-base text-gray-100 underline">
                <MailIcon class="inline-block h-6 w-6 mr-2" />
                <a href="mailto:contact@hgmfrance.fr">contact@hgmfrance.fr</a>
              </p>

              <p class="flex items-center font-inter font-medium text-base text-gray-100 underline">
                <MobileDeviceIcon class="inline-block h-6 w-6 mr-2" />
                <a href="tel:+33164707734">+33 1 64 70 77 34</a>
              </p>
            </div>

            <form
              class="block w-full lg:w-3/5 py-4 md:py-6 px-6 md:px-8 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg bg-white"
              name="contact"
              method="POST"
              data-netlify="true"
              action="/contact-success"
            >
              <input type="hidden" name="form-name" value="contact" />

              <p class="mb-6 text-gray-900 text-lg font-medium">Envoyez-nous votre message</p>

              <div class="flex flex-col lg:flex-row mb-4">
                <div class="relative w-full mb-4 lg:mb-0">
                  <label for="company" class="input-label">Entreprise</label>

                  <input
                    id="company"
                    class="input-contact w-full mb-4 lg:mb-0"
                    name="company"
                    label="Entreprise"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div class="flex flex-col lg:flex-row mb-4">
                <div class="relative w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-2">
                  <label for="lastname" class="input-label">Nom</label>

                  <input
                    id="lastname"
                    class="input-contact w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-2"
                    name="lastname"
                    label="Nom"
                    type="text"
                    auto-complete="given-name"
                    required
                  />
                </div>

                <div class="relative w-full lg:w-1/2 lg:ml-2">
                  <label for="firstname" class="input-label">Prénom</label>

                  <input
                    id="firstname"
                    class="input-contact w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-2"
                    name="firstname"
                    label="Prénom"
                    type="text"
                    auto-complete="given-name"
                    required
                  />
                </div>
              </div>

              <div class="flex flex-col lg:flex-row mb-4">
                <div class="relative w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-2">
                  <label for="email" class="input-label">Adresse email</label>

                  <input
                    id="email"
                    class="input-contact w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-2"
                    name="email"
                    label="Adresse email"
                    type="text"
                    auto-complete="email"
                    required
                  />
                </div>

                <div class="relative w-full lg:w-1/2 lg:ml-2">
                  <label for="mobile" class="input-label">Numéro de téléphone</label>

                  <input
                    id="mobile"
                    class="input-contact w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-2"
                    name="mobile"
                    label="Numéro de téléphone"
                    type="tel"
                    auto-complete="tel"
                    required
                  />
                </div>
              </div>

              <div class="flex flex-col lg:flex-row mb-4">
                <div class="relative w-full">
                  <label for="object" class="input-label">Objet</label>

                  <select id="object" name="object" class="block min-w-full max-w-full p-3 shadow-sm border rounded-sm border-gray-300 font-roboto font-medium text-gray-800 placeholder-gray-400 text-base transition outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                    <option value="convoyage">Convoyage</option>
                    <option value="manipulation-produits">Manipulation de produits (mise au pas, regroupement)</option>
                    <option value="controle-vision">Contrôle par vision</option>
                  </select>
                </div>
              </div>

              <div class="flex flex-col lg:flex-row mb-4">
                <div class="relative w-full">
                  <label for="message" class="input-label">Message</label>

                  <textarea
                    id="message"
                    class="input-contact w-full mb-4 lg:mb-0 lg:mr-2"
                    name="message"
                    label=""
                    type="text"
                    required
                  />
                </div>
              </div>

              <button type="submit" class="float-right inline-block px-6 py-3 font-roboto text-white bg-blue-700 rounded-sm cursor-pointer transition duration-150 hover:bg-blue-800 focus:ring focus:ring-blue-200 focus:outline-none">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import MobileDeviceIcon from '@/components/icons/MobileDevice';
import MailIcon from '@/components/icons/Mail';

export default {
  components: { MobileDeviceIcon, MailIcon },
};
</script>

<style lang="postcss" scoped>
.input-label {
  @apply block mb-1 font-roboto font-medium text-gray-800 text-base;
}

.input-contact {
  @apply block min-w-full px-3 py-3 shadow-sm border rounded-sm border-gray-300 font-roboto font-medium text-gray-800 placeholder-gray-400 text-base transition outline-none focus:border-blue-500 focus:ring focus:ring-blue-200;
}
</style>
