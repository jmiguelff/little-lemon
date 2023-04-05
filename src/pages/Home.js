import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Testimonials from '../components/testimonials/Testimonials';
import Bio from '../components/bio/Bio'
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Testimonials />
      <Bio />
      <Footer />
    </>
  );
}

export default Home;