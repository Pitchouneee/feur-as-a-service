<p align="center">
  <img src="assets/feur-theobabac.gif" alt="Feur Theobabac" />
</p>

# 🤖 Feur as a Service

> **Un bot Discord inutile, donc absolument indispensable.**  
> Il répond **"feur"** quand quelqu’un termine son message par un mot finissant en **"quoi"**. Voilà.

---

## ✨ Fonctionnalités

- ✅ Détecte les messages se terminant par des mots comme :
  - `quoi`
  - `pourquoi`
  - `c’est quoi`
  - `on sait pas quoi`
- 🤖 Répond automatiquement **"feur"** sans pitié
- 🧠 Basé sur une regex stupide mais efficace
- ⚡ Ultra léger, sans base de données, ni excuse

---

## 🔍 Exemples de messages

| Message reçu                      | Réponse du bot |
|----------------------------------|----------------|
| Tu fais quoi ?                   | feur           |
| Pourquoi ?                       | feur           |
| Je sais pas c'est quoi...        | feur           |
| Bon bah voilà quoi.              | feur           |
| On mange quoi ce soir ?          | feur           |
| Je vais bien.                    | *(rien)*       |

---

## 🚀 Installation

### 1. Clone le projet

```bash
git clone https://github.com/Pitchouneee/feur-as-a-service.git
cd feur-as-a-service
```

### 2. Installe les dépendances

```bash
npm install
```

### 3. Configure le token Discord

Crée un fichier `.env` :

```env
DISCORD_TOKEN=ton_token_de_bot
```

> 🔐 Récupère ton token dans [Discord Developer Portal](https://discord.com/developers/applications)  
> Onglet **Bot** > "Reset Token" > "Copy"

---

## 🤖 Ajouter le bot à ton serveur Discord

1. Dans ton app sur le [Developer Portal](https://discord.com/developers/applications)
2. Va dans **OAuth2 > URL Generator**
3. Coche :
   - **Scopes** : `bot`
   - **Bot Permissions** : `Send Messages`, `Read Message History`
4. Utilise l’URL générée pour inviter le bot dans ton serveur

---

## 🧠 Code principal

Le cœur du bot se résume à ceci :

```js
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const content = message.content.trim().toLowerCase();
  const endsWithQuoi = /(\w*quoi)[?!.\s]*$/i.test(content);

  if (endsWithQuoi) {
    await message.reply('feur');
  }
});
```

> 🤯 Oui, tout ce projet repose littéralement sur une regex qui détecte les `quoi`.

---

## 🧃 Licence

MIT. Fais ce que tu veux. Même un bot `hein → deux`.

---

## 💬 Contribuer

Les PR sont bienvenues, surtout si elles sont stupides.

---

## 🧠 Pro Tips

💡 **Astuce** : active bien `MESSAGE CONTENT INTENT` dans le [Developer Portal](https://discord.com/developers/applications) (onglet **Bot**) pour que le bot voie les messages !
