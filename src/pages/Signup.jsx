import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container">
      <div className="card">
        <h2>Create your PopX account</h2>
        
        <form className="form">
          <input type="text" placeholder="Full Name*" />
          <input type="tel" placeholder="Phone number*" />
          <input type="email" placeholder="Email address*" />
          <input type="password" placeholder="Password*" />
          <input type="text" placeholder="Company name" />
          
          <div className="radio-group">
            <label>Are you an Agency?*</label>
            <label><input type="radio" name="agency" value="yes"/> Yes</label>
            <label><input type="radio" name="agency" value="no"/> No</label>
          </div>

          <button type="submit" className="btn primary full">Create Account</button>
        </form>
        <Link to="/account" className="btn full">Go to Account</Link>
      </div>
    </div>
  );
}
 