import random
from telegram.ext import Updater, CommandHandler

def start(update, context):
    update.message.reply_text("Welcome to the Stone Paper Scissors Bot! Please type /play to start a game.")

def play(update, context):
    options = ["stone", "paper", "scissors"]
    user_choice = update.message.text.split()[1]
    if user_choice not in options:
        update.message.reply_text("Invalid choice. Please choose 'stone', 'paper', or 'scissors'.")
        return
    bot_choice = random.choice(options)
    update.message.reply_text(f"You chose {user_choice} and the bot chose {bot_choice}.")
    if user_choice == bot_choice:
        update.message.reply_text("It's a tie!")
    elif user_choice == "stone" and bot_choice == "scissors":
        update.message.reply_text("You win!")
    elif user_choice == "paper" and bot_choice == "stone":
        update.message.reply_text("You win!")
    elif user_choice == "scissors" and bot_choice == "paper":
        update.message.reply_text("You win!")
    else:
        update.message.reply_text("You lose.")

updater = Updater("TELEGRAM_BOT_TOKEN", use_context=True)

updater.dispatcher.add_handler(CommandHandler("start", start))
updater.dispatcher.add_handler(CommandHandler("play", play))

updater.start_polling()
updater.idle()
