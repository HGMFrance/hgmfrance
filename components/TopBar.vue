<template>
  <nav class="py-3 text-gray-600 bg-white">
    <div
      class="lg:max-w-5xl xl:max-w-7xl mx-auto px-8 sm:px-16 flex flex-row justify-between items-center text-sm tracking-tight font-medium"
    >
      <nuxt-link to="/" class="inline-block w-auto h-auto">
        <img
          class="inline-block h-8 w-auto"
          src="@/assets/logo/hgm-logo-black-no-padding.png"
          alt=""
        />
      </nuxt-link>

      <ul class="flex flex-row items-center">
        <li class="mr-4">
          <nuxt-link to="/actualites">
            Actualités
          </nuxt-link>
        </li>

        <li
          class="px-6 py-2 rounded-sm text-white bg-blue-700 cursor-pointer transition-all hover:bg-blue-800"
        >
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
