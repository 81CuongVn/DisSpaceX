const { MessageEmbed } = require('discord.js');

module.exports = { 
    config: {
        name: "earrape",
        description: "Make bot super louder!",
        category: "filters",
        accessableby: "Member",
        aliases: []
    },
    run: async (client, message, args) => {
        const msg = await message.channel.send("Processing.....");
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send("You need to be in a voice channel to play music.");

        const permissions = channel.permissionsFor(client.user);
        if (!permissions.has("CONNECT")) return message.channel.send("I cannot connect to your voice channel, make sure I have permission to!");
        if (!permissions.has("SPEAK")) return message.channel.send("I cannot connect to your voice channel, make sure I have permission to!");

        const queue = client.distube.getQueue(message)
            if (!queue) msg.edit(`There is nothing in the queue right now!`)
        queue.setVolume(1000)

        const embed = new MessageEmbed()
            .setColor("#000001")
            .setDescription(`\`🔊\` | **Volume charge to:** \`Earrape\``);

        msg.edit('', embed);

    }
};