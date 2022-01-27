# from telnetlib import GA
# from unittest import result
from flask import render_template
from app import app
from models.player import Player
from models.game import Game


@app.route('/<player_1_choice>/<player_2_choice>')
def compare(player_1_choice, player_2_choice):
    player_1 = Player("Player 1", player_1_choice)
    player_2 = Player("Player 2", player_2_choice)
    game = Game()
    result = game.compare(player_1_choice, player_2_choice)
    return render_template('result.html', title="Battle", player_1=player_1, player_2=player_2, result=result)


@app.route('/home')
def home_page():
    return render_template('index.html', title="Home")

@app.route('/rules')
def index():
    return render_template('rules.html', title="Rules")

@app.route('/play/<player_1_choice>')
def battle(player_1_choice):
    player_1 = Player("Player 1", player_1_choice)
    game = Game()
    computer_choice = game.vspc()
    computer = Player("computer", computer_choice)
    outcome = game.compare(player_1_choice, computer_choice)
    return render_template('result.html', title="Outcome", player_1=player_1, player_2=computer, outcome=outcome)