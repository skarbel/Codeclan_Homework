from flask import render_template, request
from app import app
from models.event_list import events
from models.event import Event
from models.event_list import add_new_event, events , add_new_event

@app.route('/events')
def index():
    return render_template('index.html', title='Home', events=events)

@app.route('/events', methods = ['POST'])
def add_event():
    event_date = request.form['Date']
    event_name_of_event = request.form['Name of Event']
    event_number_of_guests = request.form['Number of guests']
    event_room_location = request.form['Room Location']
    event_description = request.form['Description']


    new_event = Event(event_date, event_name_of_event, event_number_of_guests, event_room_location, event_description, False)
    add_new_event(new_event)
    return render_template('index.html', title='Home', events=events)
