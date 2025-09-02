import { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
        // we will solve it later
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <div className="BookingForm">
            <section>
                <form onSubmit={handleSubmit}>

                    <div className="container">

                        {/* for date selection */}
                        <div className="each-input row">
                            <label htmlFor="book-date" className="col-md-6">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" className="col-md-6" required />
                        </div>

                        {/* for times selection */}
                        <div className="each-input row">
                            <label htmlFor="book-time" className="col-md-3">Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} className="col-md-3">
                                {/* <option value="">Select a Time</option> */}
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>

                        {/* for guests selection */}
                        <div className="each-input row">
                            <label htmlFor="book-guests" className="col-md-3">Number of Guests:</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} className="col-md-3" required/>
                        </div>

                        {/* for occasion selection */}
                        <div className="each-input">
                            <label htmlFor="book-occasion" className="col-md-3">Choose Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} className="col-md-3">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Others</option>
                            </select>
                        </div>

                        {/* submit */}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"} />
                        </div>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default BookingForm;