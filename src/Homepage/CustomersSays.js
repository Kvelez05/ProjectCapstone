import customer1 from '../Images/customer-1.jpeg';
import customer2 from '../Images/customer-2.jpeg';
import customer3 from '../Images/customer-3.jpeg';
import customer4 from '../Images/customer-4.jpeg';

const StarRating = () => {
    return (
        <div className='star-rating'>
            <div className='five-pointed-star'></div>
            <div className='five-pointed-star'></div>
            <div className='five-pointed-star'></div>
            <div className='five-pointed-star'></div>
            <div className='five-pointed-star'></div>
        </div>
    )
}
const testimonials = [
    {
      name: 'John Doe',
      quote: 'I loved the greek salad',
      image: 'customer-1.jpeg'
    }, // Assuming customer1.jpg is located in your Images folder,
    {
      name: 'Ricky Jobs',
      quote: 'Amazing food, cozy atmosphere, and friendly service',
      image: 'customer-2.jpeg' // Assuming customer2.jpg is located in your Images folder
    },
    {
        name: 'Jane Smith',
        quote: 'You should give bruchetta a try',
        image: 'customer-3.jpeg' // Assuming customer2.jpg is located in your Images folder
      },
      {
        name: 'Veronica Williams',
        quote: 'The delivery service is great',
        image: 'customer-4.jpeg' // Assuming customer2.jpg is located in your Images folder
      },
    // Add more testimonial objects as needed
  ];
  const TestimonialCard = ({ testimonial }) => {
    const { name, quote, image } = testimonial;

    return (
      <div className='testimonial-card'>
        <StarRating />
        <div className='customer-info'>
          <img src={require(`../Images/${image}`)} /> {/* Dynamically importing image */}
          <h2>{name}</h2>
        </div>
        <h3>"{quote}"</h3>
      </div>
    );
  }

const CustomerSays = () => {
    return(
        <div className='testimonials'>
            <h1>Testimonials</h1>
            <div className='testimonial-container'>
            {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
            </div>
        </div>
    )
}
export default CustomerSays;