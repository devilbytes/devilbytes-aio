const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1025027158567043072',

  status: {
    rotateDefault: [
      { name: 'DEVILBYTES | /help', type: ActivityType.Playing },
      { name: 'DEVILBYTES • Music System', type: ActivityType.Listening },
      { name: 'DEVILBYTES • TTS Enabled', type: ActivityType.Watching },
      { name: 'DEVILBYTES • Moderation Active', type: ActivityType.Playing },
      { name: 'DEVILBYTES • Protecting Servers', type: ActivityType.Competing }
    ],
    songStatus: true
  },

  spotifyClientId: "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret: "199a619d22dd4e55a4a2c1a7a3d70e63",
}
