import "./Testimonials.css";
import HelenaImg from "../../assets/woman1.jpg"
import JohnImg from "../../assets/man1.jpg"
import MarinaImg from "../../assets/woman2.jpg"
import HarryImg from "../../assets/man2.jpg"
import Review from "../review/Review"

const Reviews = [
  {
    id: 1,
    rating: "4",
    name: "Helena",
    image: HelenaImg,
    review: "Best Greek Salad ever. Everyone was super nice.",
  },
  {
    id: 2,
    rating: "5",
    name: "John Smith",
    image: JohnImg,
    review: "Loved the vibe. The Bruchetta is an incredible appetizer. I'll return for sure.",
  },
  {
    id: 3,
    rating: "3",
    name: "Marina Parks",
    image: MarinaImg,
    review: "The Bruchetta is super tasty. The service could be quicker.",
  },
  {
    id: 4,
    rating: "5",
    name: "Harry Houdini",
    image: HarryImg,
    review: "I've tried all the dishes, they are all incredible. It's my favorite restaurante.",
  }

]

function Testimonials() {
  return (
    <>
      <section>
        <div className="testimonials-section">
          <div className="testimonials-banner">
            <h2 className="testimonials-title">Testimonials</h2>
          </div>
          <div className="review-cards-container">
            {Reviews.map(review => (
              <Review
                key={review.id}
                score={review.rating}
                img={review.image}
                name={review.name}
                description={review.review}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;