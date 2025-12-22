import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <section className="hero">
        <div className="container">
          <h1>RiskGuard</h1>
          <p>Professional Insurance Underwriting Platform</p>
          <div className="hero-buttons">
            <Link to="/register">
              <button className="btn btn-primary">Get Started</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-secondary">Login</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
