import "./Main.css";
import { NavLink } from "react-router-dom";
import Card from "../card/Card"
import GreekSalad from "../../assets/greek-salad.jpg"
import Bruchetta from "../../assets/bruchetta.jpg"
import LemonDessert from "../../assets/lemon-dessert.jpg"

const Meals = [
  {
    id: 1,
    title: "Greek Salad",
    price: "12.99",
    image: GreekSalad,
    alt: "Delicious Greek salad meal",
    description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    id: 2,
    title: "Bruchetta",
    price: "5.99",
    image: Bruchetta,
    alt: "Delicious bruchetta meal",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "5.00",
    image: LemonDessert,
    alt: "Delicious Lemon dessert meal",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
]

function Main() {
  return (
    <>
      <main>
        <div className="main-section">
          <div className="specials-banner">
            <h2 className="specials-title">This week specials!</h2>
            <NavLink to="/order"><button className='btn'>Online Menu</button></NavLink>
          </div>
          <div className="specials-cards-container">
            {Meals.map(meal => (
              <Card
                key={meal.id}
                title={meal.title}
                price={meal.price}
                image={meal.image}
                alt={meal.alt}
                description={meal.description}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;