const { Client, GatewayIntentBits, Collection } = require("discord.js");
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});
const loadCommands = require("./Loaders/loadCommands");
const config = require("./config.js");

bot.commands = new Collection();

bot.login(config.token);
loadCommands.load_commands(bot);

bot.on("messageCreate", async (message) => {
    if (message.content === "!ping")
        return bot.commands.get("ping").run(bot, message);
});

bot.on("ready", async () => {
    console.log(`${bot.user.tag} est bien en ligne !`);
});
