import random

class Game():

    def __init__(self):
        pass

    def compare(self, player_1_choice, player_2_choice):
        if player_1_choice == player_2_choice:
            return "Draw"
        if player_1_choice == "rock" and player_2_choice == "paper":
            return "Player 2 WINS by choosing paper"
        if player_1_choice == "paper" and player_2_choice == "scissors":
            return "Player 2 WINS by choosing scissors"
        if player_1_choice == "scissors" and player_2_choice == "rock":
            return "Player 2 WINS by choosing rock"
        if player_2_choice == "rock" and player_1_choice == "paper":
            return "Player 1 WINS by choosing paper"
        if player_2_choice == "paper" and player_1_choice == "scissors":
            return "Player 1 WINS by choosing scissors"
        if player_2_choice == "scissors" and player_1_choice == "rock":
            return "Player 1 WINS by choosing rock"

    def vspc(self):
        choices = ["rock", "paper", "scissors"]
        pc_choice = random.choice(choices)
        return pc_choice