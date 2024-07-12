const testimonials = [
  {
    name: 'Margaret E.',
    quote: "This is fantastic! Thanks so much guys!",
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRd1zYuZ3jJRpSYIeYjb2AeRr9VpOF9n24X1IrGicZMnp_wHOmo',
  },
  {
    name: 'Fred S.',
    quote: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXEWWuKu7oor-be26AkYlanE7Y_bqgQogPhO0Z1G4D_-4rpS8q', 
  },
  {
    name: 'Sarah W.',
    quote: "Thanks so much for making these free resources available to us!",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCebgFOEfUauTvY9KhtypNEVsOs81Kn37ShT8aNmjWcGXJ8sY', 
  },
];

export function Feed (){
  return (
    <div className="testimonial-section">
      <h2>What people are saying...</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
