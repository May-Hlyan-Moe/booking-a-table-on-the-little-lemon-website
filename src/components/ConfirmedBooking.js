import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return (
        <div className="ConfirmedBooking">
            <div>
                <h1>Booking has been <span>Confirmed!</span></h1>
                <Link to="/" >
                    <button>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default ConfirmedBooking;