<template>
  <div
    class="flex flex-row items-center justify-center py-4 px-8 sm:px-16 bg-gray-900"
  >
    <p class="text-center text-gray-100 text-sm font-medium">
      Copyright © {{ year }} — H.G.M. France — Tous droits réservés
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
