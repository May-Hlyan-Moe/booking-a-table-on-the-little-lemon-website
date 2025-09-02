// to fix the props issue

import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <div id="booking">
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm ={props.SubmitForm} />
        </div>
    );
};

export default Booking;