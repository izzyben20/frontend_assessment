import { Link } from 'react-router-dom'
import logo from '../assets/metricks-white.png';
import Footer from '../components/Footer';
import Question from '../components/Question';
import WhyUS from '../components/WhyUS';

const About = () => {
  return (
    <section className='about-us'>
      <div className="about-container">
        <nav>
          <Link to='/'>
          <div className="logo">
            <img src={logo} alt="logo" />
            <div>metricks</div>
          </div>
          </Link>
          <ul className="right-nav">
            <li style={{ color: '#FF00F7' }}>About</li>
            <li>Blog</li>
            <li>
              <button>Contact Us</button>
            </li>
          </ul>
        </nav>
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
