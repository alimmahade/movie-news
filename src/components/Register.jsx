import { useContext, useState } from "react";
import { MyAuthProviderContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Register = () => {
  const { createUser, updateUserProfile } = useContext(MyAuthProviderContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      setError({ ...error, name: "Name must be at least 5 character long" });
      return;
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      toast(
        "At least six digit Password must should be one uppercase,lowercase letter"
      );
      return;
    }
    createUser(email, password)
      .then((result) => console.log(result.user))
      .then(() => {
        Swal.fire({
            title: "Welcome Successfully Registered",
            text: "You clicked the button!",
            icon: "success"
          });
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo });
      })
      .catch((err) => {
        Swal.fire({
            title: "Opps! Not success, Try Again",
            text: "You clicked the button!",
            icon: "success"
          });
        console.log(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
        <title>Register  </title>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              {error.name && (
                <label className="label text-sm text-red-400">
                  {error.name}
                </label>
              )}
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              you are already register ?Please{" "}
              <Link
                to="/login"
                className="bg-red-300 p-1 rounded-lg text-white"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
