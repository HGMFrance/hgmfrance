<template>
  <nav class="py-3 text-gray-600 bg-white">
    <div
      class="lg:max-w-5xl xl:max-w-7xl mx-auto px-8 sm:px-16 flex flex-row justify-between items-center text-sm tracking-tight font-medium"
    >
      <nuxt-link to="/" class="inline-block w-auto h-auto">
        <img
          class="inline-block h-6 lg:h-10 w-auto"
          src="@/assets/logo/hgm-logo-black-no-padding.png"
          alt=""
        />
      </nuxt-link>

      <ul class="flex flex-row items-center">
        <li class="mr-4">
          <nuxt-link class="link-item" to="/actualites">
            Actualités
          </nuxt-link>
        </li>

        <li>
          <nuxt-link class="px-6 py-2 rounded-sm font-bold font-source text-white bg-blue-700 cursor-pointer transition-all hover:bg-blue-800" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.link-item {
  @apply font-source font-bold text-gray-700 transition-all hover:text-gray-800;
}
</style>
