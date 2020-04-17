const TelegramBot = require("node-telegram-bot-api");

const token = "1122814458:AAFfZTpp7jvstb62C1BUnGmo381gT0FPHlM";

const bot = new TelegramBot(token, { polling: true });
let notes = [];

bot.onText(/remember (.+) в (.+)/, (msg, match) => {
  var userId = msg.from.id;
  var text = match[1];
  var time = match[2];

  notes.push({ uid: userId, time: time, text: text });

  bot.sendMessage(userId, "Отлично! Я обязательно напомню, если не сдохну :)");
});

setInterval(() => {
  for (var i = 0; i < notes.length; i++) {
    const curDate = new Date().getHours() + ":" + new Date().getMinutes();
    if (notes[i]["time"] === curDate) {
      bot.sendMessage(
        notes[i]["uid"],
        "Напоминаю, что вы должны: " + notes[i]["text"] + " сейчас."
      );
      notes.splice(i, 1);
    }
  }
}, 1000);
