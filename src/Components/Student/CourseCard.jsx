import { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
import "./CourseCard.css"; // Import the CSS file

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  return (
    <Link
      className="course-card"
      onClick={() => {
        scrollTo(0, 0);
      }}
      to={"/course/" + course._id}
    >
      <img
        className="course-thumbnail"
        src={course.courseThumbnail}
        alt="Course Thumbnail"
      />

      <div className="course-details">
        <h3 className="course-title">{course.courseTitle}</h3>
        <p className="educator-name">{course.educator.name}</p>

        <div className="rating-container">
          <p>4.5</p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <img
                className="star"
                key={i}
                src={assets.star}
                alt="Star"
              />
            ))}
          </div>
          <p className="rating-count">22</p>
        </div>

        <p className="course-price">
          {currency}
          {(course.coursePrise - (course.discount * course.coursePrise) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;