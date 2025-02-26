import { assets, dummyTestimonial } from "../../assets/assets";
import './TestimonialSection.css';  // Import the CSS file

const TestimonialSection = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonials</h2>
      <p className="testimonial-description">
        Hear from our learners as they share their journeys of transformation, success, and how our <br />
        platform has made a difference in their lives.
      </p>
      <div className="testimonial-grid">
        {dummyTestimonial.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img
                className="testimonial-image"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className="testimonial-name">{testimonial.name}</h1>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
            <div className="testimonial-body">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="star-icon"
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="Star"
                  />
                ))}
              </div>
              <p className="testimonial-feedback">
                {testimonial.feedback}
              </p>
            </div>
            <a className="testimonial-link" href="#">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
