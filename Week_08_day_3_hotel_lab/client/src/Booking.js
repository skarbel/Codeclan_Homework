import React from "react";
import {deleteBooking} from "./BookingsService";
import {removeBooking} from "./App";
import { putBooking } from "./BookingsService";

const Booking = ({booking, removeBooking}) => {

    const handleDelClick = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })

    }
    

    return(
        <div id="list">
        <p>
        {`Name:  ${booking.first_name} ${booking.last_name}`}
        <br></br>
        Email: {booking.email}
        <br></br>
        Number of guests: {booking.number_of_people}
        <br></br>
        Check In Date: {booking.check_in_date}
        <br></br>
        Check Out Date: {booking.check_out_date}
        <br></br>
        Checked in? {booking.check_in_status}
        <br></br>
        Checked out? {booking.check_out_status}</p>

        <button onClick={handleDelClick} id="button">Delete</button>
        </div>
            
        )}
    
    export default Booking