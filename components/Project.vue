<template>
  <a
    :href="link"
    target="_blank"
    class="flex-1 bg-opacity-30 p-4 my-2 rounded-md hover:scale-105 transform ease-in-out duration-300"
    :class="color"
  >
    <div class="flex flex-row items-center">
      <img
        :src="
          icon
            ? icon.startsWith('https')
              ? icon
              : require(`@/assets/img/${icon}`)
            : null
        "
        class="w-12 h-12 object-contain"
      />
      <div class="ml-4 flex flex-col justify-center">
        <h2 class="text-lg font-bold flex items-center">
          {{ name }}
          <span v-if="year" class="text-sm font-normal ml-4 hidden sm:block"
            >[{{ year }}]</span
          >
        </h2>
        <p class="text-sm">
          {{ description }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    year: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'bg-white',
    },
  },
}
</script>
