<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Major Projects</h1>
    <div class="flex flex-col mt-2">
      <Project
        v-for="project in majorProjects"
        :key="project.name"
        :icon="project.icon"
        :name="project.name"
        :link="project.link"
        :year="project.year"
        :description="project.description"
        :color="project.color"
      />
    </div>
    <button class="mt-6" @click="showAllProjects = !showAllProjects">
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="transition duration-300 transform"
        :class="showAllProjects ? '-rotate-180' : ''"
      />
      Show All Projects
    </button>
    <transition name="slide">
      <div v-if="showAllProjects" class="flex flex-col mt-2">
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
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAllProjects: false,
      projects: [
        {
          icon: 'https://mapped.thijs.gg/favicon.ico',
          name: 'Mapped',
          link: 'https://mapped.thijs.gg',
          year: 'Dec 2021',
          description:
            'View multiple datasets, like LGBTQ+ rights, sexuality education, and more, on a map of the US.',
          color: 'bg-green-500',
        },
        {
          icon: 'https://uploadr.thijs.gg/favicon.ico',
          name: 'Uploadr',
          link: 'https://uploadr.thijs.gg',
          year: 'Dec 2021',
          description:
            'Website to quickly and easily paste, drag, or select an image to upload to Imgur!',
          color: 'bg-purple-500',
        },
        {
          icon: 'https://nftavatar.thijs.gg/favicon.png',
          name: 'NFT Avatar',
          link: 'https://nftavatar.thijs.gg',
          year: 'Nov 2021',
          description:
            'Create fake Twitter NFT avatars by giving your profile picture a hexagonal shape.',
          color: 'bg-blue-500',
        },
        {
          icon: 'desmosautosave.png',
          name: 'Desmos Auto Save',
          link: 'https://chrome.google.com/webstore/detail/desmos-auto-save/cijdbpjdomlnlhlbjajbpofgdgkhfcif',
          year: 'Sep 2021',
          description:
            'Automatically save your Desmos projects! Never lose your work again.',
          color: 'bg-green-500',
        },
        {
          icon: 'discordtools.png',
          name: 'DiscordTools',
          link: 'https://discordtools.io',
          year: 'Jun 2021',
          description:
            'An open-source Discord utility website for power users! Get your server count, lookup ids, and more!',
          color: 'bg-indigo-600',
        },
        {
          icon: 'https://cdn.discordapp.com/avatars/815258667602804767/82f941c8ac0baedb0d485bd424c788d8.png?size=512',
          name: 'FactCheqr',
          link: 'https://github.com/tandpfun/discord-factcheck-bot',
          year: 'Feb 2021',
          description:
            '🏆 1st place in LancerHacks Hackathon - Helps prevent the spread of misinformation in Discord servers. [outdated/unmaintained]',
          color: 'bg-red-500',
        },
      ],
      majorProjects: [
        {
          icon: 'https://skillicons.dev/favicon.png',
          name: 'Skill Icons',
          link: 'https://skillicons.dev',
          year: 'Mar 2021',
          description:
            'Showcase your skills on your GitHub or resumé with ease! Beautiful skill badges which can be embedded on any site.',
          color: 'bg-purple-500',
        },
        {
          icon: 'tod.png',
          name: 'Truth or Dare',
          link: 'https://truthordarebot.xyz',
          year: 'Oct 2021',
          description:
            'An open-source Discord bot that allows users to connect over Truth or Dare! Used by over 1,000,000 online communities.',
          color: 'bg-indigo-500',
        },
        {
          icon: 'channelbot.png',
          name: 'ChannelBot',
          link: 'https://channelbot.xyz',
          year: 'May 2018',
          description:
            'A Discord bot that helps users build and manage their online communities! Used by over 50,000 online communities.',
          color: 'bg-blue-400',
        },
      ],
    }
  },
}
</script>
