import Companies from "../../Components/Student/Companies";
import CoursesSection from "../../Components/Student/CoursesSection";
import Hero from "../../Components/Student/Hero";
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Companies />
      <CoursesSection />
    </div>
  );
};

export default Home;
