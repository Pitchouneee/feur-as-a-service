import { Client, GatewayIntentBits } from 'discord.js';
import { shouldFeur } from '../feur-core.js';

export function startDiscordBot() {
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
        if (message.author.bot) return;
        if (shouldFeur(message.content)) {
            await message.reply('feur');
        }
    });

    client.login(process.env.DISCORD_TOKEN);
}
