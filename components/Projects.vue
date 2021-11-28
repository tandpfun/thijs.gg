<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Projects</h1>
    <div class="flex flex-col mt-2">
      <Project
        v-for="project in projects"
        :key="project.name"
        :icon="project.icon"
        :name="project.name"
        :link="project.link"
        :year="project.year"
        :description="project.description"
        :color="project.color"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          icon: 'tod.png',
          name: 'Truth or Dare',
          link: 'https://truthordarebot.xyz',
          year: '2021+',
          description:
            'An open-source Discord bot that allows users to play Truth or Dare! Used more than 600,000 times per day in over 270,000 communities.',
          color: 'indigo-500',
        },
        {
          icon: 'channelbot.png',
          name: 'ChannelBot',
          link: 'https://channelbot.xyz',
          year: '2018+',
          description:
            'A Discord bot that helps users build and manage their online communities! Used in over 25,000 communities.',
          color: 'blue-400',
        },
        {
          icon: 'discordtools.png',
          name: 'DiscordTools',
          link: 'https://discordtools.io',
          year: '2020+',
          description:
            'An open-source Discord utility website for power users! Get your server count, lookup ids, and more!',
          color: 'indigo-600',
        },
      ],
    }
  },
}
</script>
