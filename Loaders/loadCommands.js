const fs = require("fs");

const load_commands = async function (bot) {
    fs.readdirSync("./commands")
        .filter((f) => f.endsWith(".js"))
        .forEach(async (file) => {
            let command = require(`../commands/${file}`).module;
            console.log("from", file, ":", command);
            if (!command.name || typeof command.name !== "string")
                throw new TypeError(
                    `La commande ${file.slice(
                        0,
                        file.length - 3
                    )} n'a pas de nom !`
                );
            bot.commands.set(command.name, command);
            console.log(`Commande ${file} chargée avec succès !`);
        });
};

module.exports = {
    load_commands: load_commands,
};
