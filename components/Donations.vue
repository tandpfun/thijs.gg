<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Donations</h1>
    <p class="mt-4">
      It's always been my goal to build things that can give back, and through
      these projects, I'm able to give back to organizations that cover a wide
      range of issues in our world today.
    </p>
    <div class="flex flex-col mt-2">
      <Project
        v-for="donation in donations"
        :key="donation.name"
        :icon="donation.icon"
        :name="donation.name"
        :link="donation.link"
        :year="donation.year"
        :description="donation.description"
        :color="donation.color"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donations: [
        {
          icon: 'teamseas.png',
          name: '$50 - Team Seas',
          link: 'https://twitter.com/truthordareteam/status/1457559516128571398',
          year: '11/7/2021',
          description:
            '$50 donated on behalf of Truth or Dare bot for reaching 250,000 servers!',
          color: 'blue-500',
        },
        {
          icon: 'glsen.png',
          name: '$50 - GLSEN',
          link: 'https://twitter.com/truthordareteam/status/1457559523678294016',
          year: '11/7/2021',
          description:
            '$50 donated on behalf of Truth or Dare bot for reaching 250,000 servers!',
          color: 'yellow-500',
        },
        {
          icon: 'bcrf.png',
          name: '$50 - Breast Cancer Research Foundation',
          link: 'https://twitter.com/truthordareteam/status/1457559527558205440',
          year: '11/7/2021',
          description:
            '$50 donated on behalf of Truth or Dare bot for reaching 250,000 servers!',
          color: 'pink-500',
        },
        {
          icon: 'stjude.png',
          name: "$50 - St. Jude Children's Research Hospital",
          link: 'https://twitter.com/ChannelBotTeam/status/1431701323360075776',
          year: '8/28/2021',
          description:
            '$50 donated on behalf of ChannelBot for reaching 22,000 servers!',
          color: 'red-500',
        },
        {
          icon: 'glsen.png',
          name: '$50 - GLSEN',
          link: 'https://tiltify.com/+discord-x-glsen-2021-pride-celebrations/stronger-together-discord-2021-pride-celebrations',
          year: '6/1/2021',
          description:
            '$50 donated on behalf of ChannelBot for a pride month fundraiser!',
          color: 'yellow-500',
        },
      ],
    }
  },
}
</script>
