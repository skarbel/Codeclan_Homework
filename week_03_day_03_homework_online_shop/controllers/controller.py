from re import template
from flask import render_template
from app import app
from models.order_list import orders

@app.route('/orders')
def index():
    return render_template('index.html', title = 'Home', newOrders = orders)

@app.route('/orders/<number>')
def order(number):
    return render_template('order.html', title = "Order", order = orders[int(number)])