import greekSalad from '../Images/greek salad.jpg';
import lemonDesert from '../Images/lemon dessert.jpg';
import bruschetta from '../Images/bruschetta.png';
import { Link } from 'react-router-dom';

export default function Specials() {
    return(
        <div className="specials">
            <div>
                <h1>Specials</h1>
                <Link to='/' className='main-button black'>Online Menu</Link>
            </div>
            <div className='specials-card-container'>
    <div className='special-card'>
        <img className='special-card-image' src={greekSalad} alt="Greek Salad" />
        <div className='special-card-body'>
            <div className='special-card-title'>
                <h2>Greek Salad</h2>
            </div>
            <div className='special-card-p'>
                <p>
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </p>
            </div>
            <h3>Order Delivery</h3>
        </div>
    </div>
    <div className='special-card'>
        <img className='special-card-image' src={bruschetta} alt="Bruschetta" />
        <div className='special-card-body'>
            <div className='special-card-title'>
                <h2>Bruschetta</h2>
            </div>
            <div className='special-card-p'>
                <p>
                    Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.
                </p>
            </div>
            <h3>Order Delivery</h3>
        </div>
    </div>
    <div className='special-card'>
        <img className='special-card-image' src={lemonDesert} alt="Lemon Cake" />
        <div className='special-card-body'>
            <div className='special-card-title'>
                <h2>Lemon Cake</h2>
            </div>
            <div className='special-card-p'>
                <p>
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
            </div>
            <h3>Order Delivery</h3>
        </div>
    </div>
</div>

        </div>
    )
}