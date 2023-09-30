import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPwd] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") return toast.error("Please enter name");
    if (email === "") return toast.error("Please enter email");
    if (password === "") return toast.error("Please enter password");
    if (password.length < 6)
      return toast.error("Password should be atleast 6 characters");
    if (!email.includes("@"))
      return toast.error("Email should have an '@' symbol");

    navigate("/");
  }

  // function handleError() {
  //   if (error) Error();
  // }
  return (
    <div className="flex min-h-full items-center justify-center text-center ">
      <div className=" mt-16 h-2/5 w-2/5 bg-slate-200 p-16 shadow-md shadow-slate-400">
        <h2>Login</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <ToastContainer />

        <form className="flex flex-col justify-around bg-slate-200">
          <div className="p-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-64 rounded bg-slate-100 shadow-sm shadow-slate-400 "
              placeholder="Enter name"
            />
          </div>
          <div className="p-8">
            <input
              id="e"
              type="text"
              className="w-64 rounded bg-slate-200 shadow-sm shadow-slate-400 "
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-8">
            <input
              id="p"
              type="password"
              className="w-64 rounded bg-slate-200 shadow-sm shadow-slate-400"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div>
            <button
              className="w-24 rounded bg-blue-400 p-2 text-lg hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
