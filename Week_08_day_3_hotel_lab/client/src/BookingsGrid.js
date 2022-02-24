import Booking from "./Booking"

const BookingsGrid = ({bookings, removeBooking}) => {

    const BookingItems = bookings.map((booking) => {

        return <Booking booking={booking} key={booking._id} removeBooking={removeBooking}/>
    })

    return (

        <div id="main">
            {/* <img src="https://media.giphy.com/media/3o85xLCFHDghSNviO4/giphy.gif" id="img"></img> */}
            <ul>
                {BookingItems}
            </ul>
        </div>
    )
}

export default BookingsGrid