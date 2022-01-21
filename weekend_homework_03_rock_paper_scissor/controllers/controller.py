from flask import render_template
from app import app
from models.player import Player
from models.game import Game

@app.route('/<player_1_choice>/<player_2_choice>')
def play(player_1_choice, player_2_choice) :
    player_1 = Player("Player 1", player_1_choice)
    player_2 = Player("Player 2", player_2_choice)
    

    game = Game(player_1_choice, player_2_choice)
    result = game.compare()


    return render_template ("result.html", player_1=player_1, player_2=player_2, result=result)


@app.route('/home')
def index():
    return render_template('index.html', title='Home')

@app.route('/rules')
def rules():
    return render_template('rules.html', title='Rules')

