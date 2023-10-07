import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto  min-h-[80vh] grid place-content-center">
        <form className="card-body w-96 shadow-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
