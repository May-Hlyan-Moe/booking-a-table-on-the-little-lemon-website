import welcomeImage from '../images/food1.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="Header">
                <section>
                    <div className="headerText">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>
                            We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <Link to="/Booking">
                            <button aria-label='On Click'>Reserve Table</button>
                        </Link>
                    </div>

                    <img src={welcomeImage} alt='welcomeimage' width={250}/>
                </section>
            </header>
        </>
    );
};

export default Header;