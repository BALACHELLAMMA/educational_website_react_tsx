import "./SignUp.scss";
import { useAuth } from "../../utils/AuthContext";
import { useRef, useState } from "react";
import {
  SarahImg,
  forwardArrow,
  backwardArrow,
  googleLogo,
  loginArrow,
} from "../../assets/resource/imgResource";
import { Link } from "react-router-dom";
import {
  hide_password_icon,
  open_password_icon,
} from "../../assets/resource/iconResource";
import TestimonialSliderComponent from "./TestimonialSliderComponent";

function Login() {
  const { user, loginUser } = useAuth();
  const loginForm = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };

    loginUser(userInfo);

    // const navigateHome = useNavigate();
    // navigateHome('/home')
  };
  return (
    <div className="bg-light ">
      <div className="hero_section container bg-light mb-5">
        <div className="main_container modal-body row d-flex justify-content-between">
          <section className="col-md-6 d-flex flex-column ">
            <div className="testimonial_description p-3  ">
              <span className="h1">Students Testimonials</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
           <TestimonialSliderComponent/>
          </section>
          <form
            onSubmit={handleSubmit}
            ref={loginForm}
            className=" col-md-5  order-first order-md-1 bg-white d-flex flex-column gap-3 p-4 rounded"
          >
            <span className="h3 text-center">
              <b>Login</b>
            </span>
            <p className="create_account text-center">
              Welcome back! please login to your account.
            </p>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">
                <b>Email</b>{" "}
              </label>
              <input
                type="email"
                className="form-control p-3 shadow-none border-light"
                name="email"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword">
                <b>Password</b>
              </label>
              <div className="password_container d-flex align-items-center border-light rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control p-3 shadow-none border-0 "
                  name="password"
                  id="exampleInputPassword"
                  placeholder="Password"
                  required
                />
                <button
                  className="border-0 bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={showPassword ? hide_password_icon : open_password_icon}
                    className="show_hide_icon"
                  />
                </button>
              </div>
            </div>
            <div className="form-group d-flex gap-2 justify-content-end ">
              <a
                href="#"
                className="forgot_password text-secondary text-decoration-none"
              >
                forgot password ?{" "}
              </a>
            </div>
            <div className="form-group d-flex gap-2">
              <input type="checkbox" />
              <label className="text-secondary fw-medium">Remember me</label>
            </div>
            <button
              type="submit"
              className="sign_up_submit_button border-0 rounded w-100 text-white mb-2 p-3"
            >
              Login
            </button>
            <div className="border-0 border-bottom pb-3 text-center position-relative">
              <span className="position-absolute top-100 translate-middle bg-white p-2">
                Or
              </span>
            </div>
            <button
              type="submit"
              className="google_sign_up_button border-0 rounded w-100 mt-2 p-3"
            >
              <img src={googleLogo} className="pe-3" />
              Login Up with Google
            </button>
            <div className="form-link d-flex align-content-center justify-content-center flex-wrap">
              <p>Don't have an account?
                </p>
                <Link to="/signUp" className="text-black">
                  {" "}
                  Sign Up
                <img src={loginArrow} alt="login" />
                </Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
