<template>
  <div class="py-3 border-b border-gray-200 text-gray-600 bg-white">
    <div
      class="lg:max-w-5xl xl:max-w-7xl mx-auto px-8 sm:px-16 flex flex-col sm:flex-row justify-between items-center text-sm"
    >
      <!-- Left part -->
      <ul class="hidden lg:flex flex-row mb-2 sm:mb-0"></ul>

      <!-- Right part -->
      <ul class="flex flex-col sm:flex-row items-center sm:items-start">
        <li class="sm:mr-4 mb-1 sm:mb-0">
          <MailSmall
            class="inline-block h-4 w-auto text-blue-700"
            src="~assets/heroicons/mail-small.svg"
            alt=""
          />
          <a href="mailto:contact@hgmfrance.com">contact@hgmfrance.com</a>
        </li>

        <li>
          <PhoneSmall
            class="inline-block h-4 w-auto text-blue-700"
            src="~assets/heroicons/phone-small.svg"
            alt=""
          />
          <a href="tel:+33164707734">+33 1 64 70 77 34</a>
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
