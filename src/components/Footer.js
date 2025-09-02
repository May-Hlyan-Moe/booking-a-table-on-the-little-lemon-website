import logo from '../images/logo.jpg';

const Footer = () => {
    return (
        <div>
            <div className="Footer">
                <div className="company-info">
                    <img src={logo} alt='logo' width={150}/>
                    <br /><br />
                    <p>
                        We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                </div>

                <div className='links'>
                    <h3 className='fw-bold'>Important Links</h3>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Reservations</a></li>
                        <li><a href='#'>Order Online</a></li>
                        <li><a href='#'>Login</a></li>    
                    </ul>
                </div>

                <div className='contact'>
                    <h3 className='fw-bold'>Contact</h3>
                    <ul>
                        <li>Address: 123, Township, USA</li>
                        <li>Phone: +123 456 789</li>
                        <li>Email: littlelemon@restaurant.com</li>
                    </ul>
                </div>
            </div>

            <div className='final-part'>
                <h3>more about this website</h3>
                <p>
                    I created this page for the Meta Front-End Developer Capstone Project to develop my React skills.
                    This project was coded by <a href="" target="_blank">May Hlyan Moe</a> and is <a href="" target="_blank">open sourced</a>.
                </p>
            </div>
        </div>
    );
};

export default Footer;