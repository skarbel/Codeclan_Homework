from models.event import Event

event1 = Event("01/01/2022", "New Year's Eve", "10", "1st Floor", "Blue Room", False)
event2 = Event("17/05/2022", "Birthday", "15", "2nd Floor", "Yellow Room", True)
events = [event1, event2]

def add_new_event(event):
    events.append(event)
