

import { useContext } from "react"
import { assets } from "../../assets/assets"
import { AppContext } from "../../Context/AppContext"
import { Link } from "react-router-dom";   

const CourseCard = ({ course }) => {


  const { currency } = useContext(AppContext);

  return (
    <Link
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
      onClick={
        () => {
          scrollTo(0,0)
        }
      }
      to={'/course/' + course._id}>

      <img
        className="w-full"
        src={course.courseThumbnail}
        alt=""
      />

      <div
        className="p-3 text-left">
        
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500" >{course.educator.name}</p>

        <div
          className="flex items-center space-x-2">
          
          <p>4.5</p>

          <div
            className="flex">
            
            {[...Array(5)].map((_, i) => (
              <img
                className="w-3.5 h-3.5"
                key={i}
                src={assets.star}
                alt="Star"
              />
            ))}

          </div>

          <p className="text-gray-500" >22</p>

        </div>

        <p
          className="text-base font-semibold text-gray-800">
          {currency}{(course.coursePrise - (course.discount * course.coursePrise / 100)).toFixed(2)}
        </p>


      </div>



    </Link>
  )
}

export default CourseCard
