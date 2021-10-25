const { MessageEmbed } = require('discord.js');

module.exports = { 
    config: {
        name: "leave",
        description: "Makes the bot leave the voice channel.",
        category: "music",
        accessableby: "Member",
        aliases: ["lev", "stop", "dc"]
    },
    run: async (client, message, args) => {
        const msg = await message.channel.send("Processing.....");
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send("You need to be in a voice channel to play music.");

        const permissions = channel.permissionsFor(client.user);
        if (!permissions.has("CONNECT")) return message.channel.send("I cannot connect to your voice channel, make sure I have permission to!");
        if (!permissions.has("SPEAK")) return message.channel.send("I cannot connect to your voice channel, make sure I have permission to!");

            client.distube.voices.leave(message.guild);

        const embed = new MessageEmbed()
            .setDescription(`\`🚫\` | **Leaved:** | \`${channel.name}\``)
            .setColor('#000001');

        msg.edit('', embed)
    }
};