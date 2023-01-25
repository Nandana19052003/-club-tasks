import telebot
import random
bot_token = '5983082868:AAE6s5wVZuRN4HzBZeXcAVrhpUtW9dYn5tc'
bot = telebot.TeleBot(bot_token)

def check_result(your_choice, bot_choice):
    if your_choice == bot_choice:
        return "It's a tie!"
    elif (your_choice == "rock" and bot_choice == "scissors") or (your_choice == "scissors" and bot_choice == "paper") or (your_choice == "paper" and bot_choice == "rock"):
        return "You win!"
    else:
        return "You lose!"


@bot.message_handler(commands=['start', 'help'])
def display_instructions(message):
    bot.reply_to(message, "Welcome to the rock-paper-scissors game by MARCUS BOT! Type /play to start a game.")

@bot.message_handler(commands=['play'])
def start_game(message):
    bot.reply_to(message, "Enter rock, paper, or scissors.")
    bot.register_next_step_handler(message, process_choice)

def process_choice(message):
    your_choice = message.text.lower()
    options = ["rock", "paper", "scissors"]
    if your_choice in options:
        bot_choice = random.choice(options)
        result = check_result(your_choice, bot_choice)
        bot.reply_to(message, f"You chose {your_choice} and the bot chose {bot_choice}. {result}")
    else:
        bot.reply_to(message, "Invalid choice. Please enter rock, paper, or scissors.")
        bot.register_next_step_handler(message, process_choice)

bot.polling()
