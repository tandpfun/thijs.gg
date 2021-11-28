<template>
  <button
    class="w-10 h-10 bg-gray-700 dark:bg-gray-200 rounded-md text-gray-200 dark:text-gray-700 items-center flex justify-center transition duration-200"
    @click="toggleTheme"
  >
    <Sun v-if="$colorMode.preference === 'light'" class="w-6" />
    <Moon v-else class="w-6" />
  </button>
</template>

<script>
export default {
  methods: {
    toggleTheme(evt) {
      this.$colorMode.value === 'dark'
        ? (this.$colorMode.preference = 'light')
        : (this.$colorMode.preference = 'dark')
    },
  },
}
</script>
