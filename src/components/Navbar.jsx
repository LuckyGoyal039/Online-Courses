import { Link } from "react-router-dom";
import { Logout, googleSignIn } from "../config/firebase";
import { setSignout, setUserLogin } from "../store";
import "../style/navbar.css";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.global.user);
  const dispatch = useDispatch();
  const handleLogin = () => {
    googleSignIn()
      .then((result) => {
        dispatch(setUserLogin({ user: result }));
      })
      .catch((error) => alert(error));
  };
  const handleLogout = () => {
    Logout();
    dispatch(setSignout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <a className="navbar-brand pl-4 py-2" href="/course-listing">
        Online Courses
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 pr-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="navbar ml-auto my-0 py-0 ">
          {user ? (
            <Link to="/student-dashboard" className="m-3">
              <CgProfile className="m-0 h2 text-primary" title="Profile" />
            </Link>
          ) : (
            <button
              type="button"
              className="mr-3 btn btn-primary"
              onClick={handleLogin}
            >
              SignIn
            </button>
          )}
        </div>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
