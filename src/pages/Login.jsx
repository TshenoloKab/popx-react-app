import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <div className="card">
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <form className="form">
          <input type="email" placeholder="Enter email address" />
          <input type="password" placeholder="Enter password" />
          <button type="submit" className="btn full">Login</button>
        </form>
      </div>
    </div>
  );
}
