import "./About.css"
import ImageA from "../../assets/aboutA.jpg"
import ImageB from "../../assets/aboutB.jpeg"

function About() {
	return (
		<>
			<section>
				<div className='about-container'>
					<div className='about-left'>
						<h2>Little Lemon</h2>
						<h3>Chicago</h3>
						<div className='about-content'>
							<p><span className='first-letter'>W</span>elcome to Little Lemon, a cozy Mediterranean restaurant located in the heart of Chicago. Our menu features traditional Mediterranean dishes with a modern twist, highlighting the vibrant flavors and ingredients of the region.</p>
							<p><span className='first-letter'>O</span>ur chefs source only the freshest and highest quality ingredients to ensure that each dish is packed with flavor and nutrition. From delicious Bruchetta to a fresh Greek salad, our menu has something for everyone.</p>
							<p><span className='first-letter'>O</span>ur warm and inviting atmosphere is the perfect place to gather with friends and family for a casual lunch or a romantic dinner. Enjoy a refreshing cocktail or glass of wine as you savor the delicious flavors of the Mediterranean.</p>
							<p><span className='first-letter'>A</span>t Little Lemon, we believe that food should be shared and enjoyed, and we can't wait to share our passion for Mediterranean cuisine with you. Join us for an unforgettable dining experience!</p>
						</div>
					</div>
					<div className='about-right'>
						<div class="image-container">
							<img class="background-image" src={ImageA} alt="Mario and Adrian Cooking" />
							<img class="overlay-image" src={ImageB} alt="Mario and Adrian Laughing" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About;