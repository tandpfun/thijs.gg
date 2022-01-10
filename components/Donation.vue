<template>
  <a
    :href="link"
    target="_blank"
    class="flex-1 bg-opacity-30 p-2 my-1 rounded-md transform ease-in-out duration-300"
    :class="`bg-${color}`"
  >
    <div class="flex flex-row items-center">
      <div class="ml-4 text-xl font-bold">${{ amount }}</div>
      <img
        :src="
          logo
            ? logo.startsWith('https')
              ? logo
              : require(`@/assets/img/${logo}`)
            : null
        "
        class="w-6 h-6 object-contain ml-4"
      />
      <div class="ml-2 flex sm:flex-row flex-col">
        <div class="font-bold">{{ name }}</div>
        <div class="mx-2 hidden sm:block">-</div>
        <div class="hidden sm:block">{{ info }}</div>
      </div>
      <div class="ml-auto mr-1 flex flex-row">
        <div>[{{ date }}]</div>
        <div class="ml-3 hidden sm:block">
          <font-awesome-icon :icon="['fas', 'external-link-alt']" />
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      default: 0,
    },
    link: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: null,
    },
    info: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'white',
    },
  },
}
</script>
