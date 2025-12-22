import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <h1>Login</h1>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
