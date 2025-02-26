import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        Empower your future with the courses designed to
        <span className="highlighted-text"> fit your choice.</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="hero-image"
        />
      </h1>
      <p className="hero-description desktop">
        We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
      </p>
      <p className="hero-description mobile">
        We bring together world-class instructors to help you achieve your professional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
