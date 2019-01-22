import telegramBot from 'node-telegram-bot-api'
import responseMessage from './dialogFlowResponse'

const telegramToken = process.env.API_TELEGRAM_TOKEN

const bot = new telegramBot(telegramToken, {
  polling: true
})

bot.on('message', (msg) => {
  responseMessage(msg.text.toString(), (res, err) => {
    if (!err) {
      bot.sendMessage(msg.chat.id, res)
    }
  })
})