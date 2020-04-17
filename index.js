const TelegramBot = require("node-telegram-bot-api");

const token = "1122814458:AAFfZTpp7jvstb62C1BUnGmo381gT0FPHlM";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `hello from Heroku, bot says: "Hi, ${msg.from.first_name} "`
  );
});
