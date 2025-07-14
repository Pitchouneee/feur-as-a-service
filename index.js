import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`FeurBot connecté`);
});

client.on('messageCreate', async (message) => {
    // Ignore les messages du bot lui-même
    if (message.author.bot) return;

    const content = message.content.trim().toLowerCase();

    // Détection basique de “quoi” à la fin
    const endsWithQuoi = /(\w*quoi)[?!.\s]*$/i.test(content);

    if (endsWithQuoi) {
        await message.reply('feur');
    }
});

client.login(process.env.DISCORD_TOKEN);
