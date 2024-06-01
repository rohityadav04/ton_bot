import dotenv from "dotenv";
import { Telegraf } from "telegraf";

dotenv.config();

const bot = new Telegraf(process.env.TG_BOT_TOKEN!);

bot.start((ctx) =>
  ctx.reply("Hello! I am a bot", {
    reply_markup: {
      keyboard: [["Increment by 5"], ["Deposit 1 Ton"], ["Withdraw 0.7 Ton"]],
    },
  })
);
