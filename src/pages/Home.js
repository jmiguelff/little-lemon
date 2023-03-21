import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Testimonials from '../components/testimonials/Testimonials';
import About from '../components/about/About'
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default Home;