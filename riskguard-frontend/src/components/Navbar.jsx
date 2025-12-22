import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">RiskGuard</Link>
        </div>
        <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
