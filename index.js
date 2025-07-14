import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

if (process.env.ENABLE_GOOGLE_CHAT === 'true') {
    const googleChatRouter = (await import('./connectors/google-chat.js')).default;
    app.use('/chat', googleChatRouter);
    console.log('Google Chat connector activé');
}

if (process.env.ENABLE_DISCORD === 'true') {
    const { startDiscordBot } = await import('./connectors/discord.js');
    startDiscordBot();
    console.log('Discord connector activé');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Bot lancé sur le port ${PORT}`);
});
