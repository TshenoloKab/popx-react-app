import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container">
<div className="card welcome-card">
  <div className="circle">1</div>
  <h2>Welcome to PopX</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <div className="buttons">
    <Link to="/signup" className="btn primary">Create Account</Link>
    <Link to="/login" className="btn secondary">Already Registered? Login</Link>
  </div>
</div>
    </div>
  );
}
