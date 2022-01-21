class Game():
    def __init__(self, player_1_choice, player_2_choice):
        self.player_1_choice = player_1_choice
        self.player_2_choice = player_2_choice

    def compare(self):
        if self.player_1_choice == self.player_2_choice:
            return None
        elif self.player_1_choice == "rock":
            if self.player_2_choice == "paper":
                return "Paper wins Rock. Player 2 wins"
            else:
                return "Rock wins Scissors. Player 1 wins"
        elif self.player_1_choice == "paper":
            if self.player_2_choice == "scissors":
                return "Scissors wins Paper. Player 2 wins"
            else:
                return "Paper wins Rock. Player 1 wins"
        elif self.player_1_choice == "scissors":
            if self.player_2_choice == "rock":
                return "Rock wins scissors. Player 2 wins"
            else:
                return "Scissors wins Paper. Player 1 wins"