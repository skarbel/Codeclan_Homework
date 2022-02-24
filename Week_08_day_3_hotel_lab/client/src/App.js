import './App.css';
import React,{useState,useEffect} from 'react';
import BookingsGrid from './BookingsGrid';
import {getBookings} from "./BookingsService";
import BookingsForm from './BookingForm';
 


function App() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings().then((allbookings) => {
      setBookings(allbookings)
    });
  },[]);

  const addBooking = (booking) =>{
    const temp = bookings.map(s =>s);
    temp.push(booking);
    setBookings(temp);
  }

  const removeBooking = (id) => {
    const temp = bookings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBookings(temp);
  }

  // const editBooking = (booking) => {
  //   const temp = bookings.map(s => s);
  //   temp.
  // }

  return(
    <>
    <BookingsForm addBooking={addBooking}/>
    <BookingsGrid bookings={bookings} removeBooking={removeBooking} />
  </>
  )
}

export default App;
