<template>
  <div class="my-4 mx-5">
    <div class="flex flex-row">
      <div class="select-none">
        <h1 class="flex items-center">
          <img
            src="~/assets/img/avatar.png"
            class="w-10 h-10 rounded-lg inline avatar"
            @click="toggleFurry"
          />
          <span class="ml-2 font-bold text-lg">thijs.gg</span>
        </h1>
      </div>
      <div class="ml-auto">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleFurry() {
      const avatars = document.getElementsByClassName('avatar')
      for (const a of avatars) {
        a.src = a.src.includes('redpanda')
          ? require('~/assets/img/avatar.png')
          : '/redpanda.png'
      }

      const favicon = document.querySelectorAll('[rel="icon"]')[0]
      favicon.href = favicon.href.includes('favicon')
        ? '/redpanda.png'
        : 'favicon.png'
    },
  },
}
</script>
