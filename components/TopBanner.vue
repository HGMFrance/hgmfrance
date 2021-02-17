<template>
  <div
    id="top-banner-component"
    class="py-3 border-b border-gray-200 text-gray-600 bg-white"
  >
    <div
      class="lg:max-w-5xl xl:max-w-7xl mx-auto px-16 flex flex-row justify-between items-center text-sm"
    >
      <!-- Left part -->
      <ul class="flex flex-row">
        <li class="mr-4">Contact</li>
        <li>News</li>
      </ul>

      <!-- Right part -->
      <ul class="flex flex-row">
        <li class="mr-4">
          <MailSmall
            class="inline-block h-4 w-auto text-blue-900"
            src="~assets/heroicons/mail-small.svg"
            alt=""
          />
          contact@hgmfrance.com
        </li>

        <li>
          <PhoneSmall
            class="inline-block h-4 w-auto text-blue-900"
            src="~assets/heroicons/phone-small.svg"
            alt=""
          />
          +33 06 42 87 19 66
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MailSmall from '~/assets/heroicons/mail-small.svg?inline'
import PhoneSmall from '~/assets/heroicons/phone-small.svg?inline'

export default {
  components: { MailSmall, PhoneSmall },
}
</script>
