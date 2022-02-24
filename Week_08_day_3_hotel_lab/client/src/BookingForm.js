import {useState} from "react";
import { postBooking } from "./BookingsService";

const BookingsForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
            
        })
    }
    

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="first_name">First Name:</label>
                <input onChange={onChange} type="text" id="first_name" required />
            </div>
            <div className="formWrap">
                <label htmlFor="last_name">Last Name:</label>
                <input onChange={onChange} type="text" id="last_name" required />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email" required />
            </div>
            <div className="formWrap">
                <label htmlFor="number_of_people">Number of guests:</label>
                <input onChange={onChange} type="number" id="number_of_people" max="4" />
            </div>
            <div className="formWrap">
                <label htmlFor="check_in_date">Check in date:</label>
                <input onChange={onChange} type="date" id="check_in_date"  />
            </div>
            <div className="formWrap">
                <label htmlFor="check_out_date">Check out date:</label>
                <input onChange={onChange} type="date" id="check_out_date"  />
            </div>
            <div className="formWrap">
                <label htmlFor="check_in_status">Check-in status:</label>
                <input onChange={onChange} type="checkbox" id="check_in_status" />
            </div>
            <div className="formWrap">
                <label htmlFor="check_out_status">Check-out status:</label>
                <input onChange={onChange} type="checkbox" id="check_out_status" />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default BookingsForm;