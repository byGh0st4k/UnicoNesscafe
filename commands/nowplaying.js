const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "nowplaying",
  description: "Te muestra información sobre la cancion que está sonando actualmente.",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    let lang = await db?.musicbot?.findOne({ guildID: interaction.guild.id })
    lang = lang?.language || client.language
    lang = require(`../languages/${lang}.js`);

    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })

      const track = queue.songs[0];
      if (!track) return interaction.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })

      const embed = new EmbedBuilder();
      embed.setColor(client.config.embedColor);
      embed.setThumbnail(track.thumbnail);
      embed.setTitle(track.name)
      embed.setDescription(`> Audio \`%${queue.volume}\`
> Duracion \`${track.formattedDuration}\`
> URL: **${track.url}**
> Modo Loop \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'Toda la lista' : 'Esta Cancion') : 'Off'}\`
> Filtro: \`${queue.filters.names.join(', ') || 'Off'}\`
> Por: <@${track.user.id}>`);

      embed.setTimestamp();
      embed.setFooter({ text: `Nesscafe ☕` })

      const saveButton = new ButtonBuilder();
      saveButton.setLabel(lang.msg47);
      saveButton.setCustomId('saveTrack');
      saveButton.setStyle(ButtonStyle.Success);

      const row = new ActionRowBuilder().addComponents(saveButton);

      interaction.reply({ embeds: [embed], components: [row] }).catch(e => { })

    } catch (e) {
      const errorNotifer = require("../functions.js")
     errorNotifer(client, interaction, e, lang)
      }
  },
};
