import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Question from '../components/Question';
import WhyUS from '../components/WhyUS';

const About = () => {
  return (
    <section className='about-us'>
      <div className="about-container height-100vh">
        <Navbar />
        <div className="gradient-circle"></div>
        <div className="glass-container glass"></div>
        <div className="blur"></div>

        <span className="line"></span>
        <div className="title">
          <span className="text">about us</span>
        </div>
        <div className="heading">
          Built for SaaS <br /> and E-Commerce
        </div>
        <article className="description">
          Our tools are easy to set up and use with a user friendly dashboard
          that enables you to set up, launch, automate and manage
          multi-affiliate campaigns in 5 minutes.
        </article>
      </div>
      <div className="good-value">
        <div className="metricks">
          Metricks was developed because just like you, we needed a product that
          could give us a <span>good value.</span>
        </div>
      </div>

      <WhyUS />
      <Question />
      <Footer />
    </section>
  );
};

export default About;
