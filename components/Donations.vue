<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Donations</h1>
    <p class="mt-4">
      It's always been my goal to build things that can give back, and through
      these projects, I'm able to give back to organizations that cover a wide
      range of issues in our world today.
    </p>
    <div class="flex flex-col mt-2"></div>
    <div class="flex flex-col mt-2">
      <Donation
        v-for="donation in donations"
        :key="donation.name"
        :logo="donation.logo"
        :name="donation.name"
        :amount="donation.amount"
        :link="donation.link"
        :date="donation.date"
        :info="donation.info"
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
          logo: 'https://twloha.com/favicon.ico',
          name: 'TWLOHA',
          amount: 50,
          link: 'https://twloha.com/',
          date: '12/25/2021',
          info: 'ToD Bot Holiday Events',
          color: 'purple-500',
        },
        {
          logo: 'teamseas.png',
          name: 'TeamSeas',
          amount: 50,
          link: 'https://twitter.com/truthordareteam/status/1457559516128571398',
          date: '11/7/2021',
          info: 'ToD Bot reaches 250k servers!',
          color: 'blue-500',
        },
        {
          logo: 'glsen.png',
          name: 'GLSEN',
          amount: 50,
          link: 'https://twitter.com/truthordareteam/status/1457559523678294016',
          date: '11/7/2021',
          info: 'ToD Bot reaches 250k servers!',
          color: 'yellow-500',
        },
        {
          logo: 'bcrf.png',
          name: 'BCRF',
          amount: 50,
          link: 'https://twitter.com/truthordareteam/status/1457559527558205440',
          date: '11/7/2021',
          info: 'ToD Bot reaches 250k servers!',
          color: 'pink-500',
        },
        {
          logo: 'stjude.png',
          name: 'St. Jude',
          amount: 50,
          link: 'https://twitter.com/ChannelBotTeam/status/1431701323360075776',
          date: '8/28/2021',
          info: 'ChannelBot reaches 22,000 servers!',
          color: 'red-500',
        },
        {
          logo: 'glsen.png',
          name: 'GLSEN',
          amount: 50,
          link: 'https://tiltify.com/+discord-x-glsen-2021-pride-celebrations/stronger-together-discord-2021-pride-celebrations',
          date: '6/1/2021',
          info: 'ChannelBot x Discord Pride Fundraiser',
          color: 'yellow-500',
        },
      ],
    }
  },
}
</script>
