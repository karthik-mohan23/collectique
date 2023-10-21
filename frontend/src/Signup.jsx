import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/useAuthContext";

const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      return;
    }
    try {
      console.log(signupForm);
      const response = await axios.post("/api/users", signupForm);
      // set user details to global state
      setUser(response.data);
      // Convert the object to a JSON string
      const jsonString = JSON.stringify(response.data);
      // Store the JSON string in localStorage
      localStorage.setItem("userDetails", jsonString);
      // reset form field
      setSignupForm({
        name: "",
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
    handleSubmit;
  }, [handleSubmit]);

  return (
    <div>
      <div className="w-[90%] mx-auto  min-h-[80vh] grid place-content-center">
        <form className="card-body w-96 shadow-2xl" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              value={signupForm.name}
              onChange={handleChange}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={signupForm.email}
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
              value={signupForm.password}
              onChange={handleChange}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div className="mt-1">
              <label className="label justify-between">
                <p className="text-[0.8rem]">
                  Already registered?{" "}
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover text-blue-500">
                    Log in
                  </Link>
                </p>
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
