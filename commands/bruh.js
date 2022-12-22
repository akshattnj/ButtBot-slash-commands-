const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bruh')
        .setDescription('idk')
    ,
    async execute(interaction)
    {
        await interaction.reply('gpt under work');
    }
}