import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
// import styles from "./login.module.css";
// import { UseAuth } from "../contexts/authcontext";
// import { Container, Alert } from "react-bootstrap";
export default function SignUp() {
  //   const { signup } = UseAuth();
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [cpassword, setcPwd] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== cpassword) {
      return setError("Passwords do not match");
    }
  }

  //     try {
  //       setLoading(true);
  //       setError("");
  //       await signup(email, password);
  //       navigate("/login");
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setLoading(false);
  //   }
  return (
    <div className="">
      <div className="">
        <h2>Signup to grocery.com!</h2>
        {/* 
        {error && <Alert variant="danger">{error}</Alert>} */}

        <form className="" onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="password"
              value={cpassword}
              placeholder="Confirm Password"
              onChange={(e) => setcPwd(e.target.value)}
            />
          </div>
          <div className="">
            <button disabled={loading}>Sign Up</button>
          </div>
        </form>
      </div>
      <div className="">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}
