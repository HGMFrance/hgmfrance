<template>
  <div id="nuxt-default-wrapper" class="font-roboto">
    <AlertBanner text="Retrouvez-nous au CFIA de Rennes du 14 au 16 mars 2023" />
    <TopBanner />
    <TopBar />
    <Nuxt />
    <BottomBar />
    <BottomBanner />
  </div>
</template>

<script>
import BottomBanner from '@/components/BottomBanner'
import BottomBar from '@/components/BottomBar'
import TopBanner from '@/components/TopBanner'
import TopBar from '@/components/TopBar'
import AlertBanner from '@/components/AlertBanner'

export default {
  components: {
    BottomBanner,
    BottomBar,
    TopBanner,
    TopBar,
    AlertBanner,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* Fix for iOS input inner box-shadow */
/* https://stackoverflow.com/a/23211766/3669565 */
input[type="text"],
input[type="tel"],
textarea[type="text"] {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
}
</style>
