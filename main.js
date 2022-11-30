const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});
const loadCommands = require("./loaders/loadCommands");

bot.commands = new Collection();

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
bot.once(Events.ClientReady, (bot) => {
    console.log(`Ready! Logged in as ${bot.user.tag}`);
});

// Connexion du bot à discord
bot.login(token);

// Chargement de toutes les commandes dans le dossier des commandes
loadCommands.load_commands(bot);

bot.on("messageCreate", async (message) => {
    if (message.content === "/frezo")
        return bot.commands.get("ping").run(bot, message);
});

// Affichage lorsque le bot est lancé
bot.on("ready", async () => {
    console.log(`${bot.user.tag} est bien en ligne !`);
});
