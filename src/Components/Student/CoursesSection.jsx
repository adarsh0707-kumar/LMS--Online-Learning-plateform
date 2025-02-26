import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import CourseCard from "./CourseCard";
import './CoursesSection.css';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <div className="courses-section">
      <h2 className="title">Learn from the best</h2>
      <p className="description">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="courses-grid">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Link
        onClick={() => {
          scrollTo(0, 0);
        }}
        className="show-all-link"
        to={'/course-list'}
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
