exports.module = {
    name: "ping",
    async run(bot, message) {
        await message.reply(`Ping : '${bot.ws.ping}'`);
    },
};
