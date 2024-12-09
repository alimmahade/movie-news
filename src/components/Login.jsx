import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MyAuthProviderContext } from "../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, googleSignIn } = useContext(MyAuthProviderContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // user Email
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };
                fetch(`https://movie-news-server.vercel.app/addmovie/`, {
                    method: "patch",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(loginInfo),
                  })
                  .then(res=>res.json())
                  .then(data => {
                    console.log('sign in info updated in db', data)
                })
        Swal.fire({
            title: "Log In successfully!",
            text: "You clicked ok!",
            icon: "success"
          });
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast("Opps ! LogIn Fail"), console.log(err.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
     
        <title>Login  </title>
      
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
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
              {error.login && (
                <label className="label text-sm text-red-400">
                  {error.login}
                </label>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <span className="text-red-400">
              New User ? Please{" "}
              <Link
                className="bg-red-300 p-1 rounded-lg text-white"
                to="/register"
              >
                Register
              </Link>
            </span>
            <p onClick={handleGoogleSignIn} className="btn btn-ghost">
              <FcGoogle /> Log in with Google
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;


// fetch(`https://movie-news-server.vercel.app/addmovie`, {
//   method: "post",
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify(movie),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     if (data.insertedId) {
//       Swal.fire({
//         title: "movie added successfully!",
//         text: "Good job!",
//         icon: "success"
//       });
//       form.reset();
//     }
//   });
