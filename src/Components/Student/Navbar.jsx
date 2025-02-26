import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import './Navbar.css';
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";


const Navbar = () => {

  const { navigate } = useContext(AppContext);


  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();


  return (
    <div className={`navbar ${isCourseListPage ? "bg-white" : "bg-cyan-100"}`}>
      <img
        onClick={
          () => {
            navigate('/');
          }
        }
        src={assets.logo}
        alt="Logo"
        className="navbar-logo"
      />

      <div className="navbar-desktop">
        <div className="navbar-links">
          {user && (
            <>
              <button className="navbar-button">Become Educator</button>
              <span>|</span>
              <Link to={"/my-enrollments"} className="navbar-link">
                My Enrollments
              </Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
            className="navbar-signin-button"
          >
            Create Account
          </button>
        )}
      </div>

      {/* For mobile screens */}
      <div className="navbar-mobile">
        <>
          {user && (
            <>
              <button className="navbar-button">Become Educator</button>
              <span>|</span>
              <Link to={"/my-enrollments"} className="navbar-link">
                My Enrollments
              </Link>
            </>
          )}

          {user ? (
            <UserButton />
          ) : (
            <button onClick={() => openSignIn()}>
              <img src={assets.user_icon} alt="user-icon" className="navbar-user-icon" />
            </button>
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
