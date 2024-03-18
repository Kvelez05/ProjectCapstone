
import restaurantImage from '../Images/restaurant.jpg';
import { Link } from 'react-router-dom';
export default function CallToAction() {
    return(
        <div className="call-to-action">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to='/' className='main-button'>Reserve a table</ Link>
            </div>
            <div className="call-to-action-image">
                <img src={restaurantImage} alt="Little Lemon Restaurant"></img>
            </div>
        </div>
    )
}