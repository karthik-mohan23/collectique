import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../context/useAuthContext";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        loginForm
      );
      console.log("data send", response.data);
      // set user details to global state
      setUser(response.data);
      // Convert the object to a JSON string
      const jsonString = JSON.stringify(response.data);
      // Store the JSON string in localStorage
      localStorage.setItem("userDetails", jsonString);
      // reset form field
      setLoginForm({
        email: "",
        password: "",
      });
      // navigate back to home
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    submitLoginForm;
  }, [submitLoginForm]);

  return (
    <div>
      <div className="w-[90%] mx-auto  min-h-[80vh] grid place-content-center">
        <form className="card-body w-96 shadow-2xl" onSubmit={submitLoginForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div className="mt-1">
              <label className="label justify-between">
                <p className="text-[1rem]">
                  New user?{" "}
                  <Link
                    to="/sign-up"
                    className="label-text-alt link link-hover text-blue-500">
                    Sign up
                  </Link>
                </p>
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
