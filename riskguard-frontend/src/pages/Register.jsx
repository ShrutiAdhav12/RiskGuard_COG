import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-page">
      <div className="container">
        <h1>Register</h1>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
