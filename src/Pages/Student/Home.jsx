import Companies from "../../Components/Student/Companies"
import CoursesSection from "../../Components/Student/CoursesSection"
import Hero from "../../Components/Student/Hero"


const Home = () => {
  return (
    <div
      className="flex flex-col items-center space-y-7 text-center">
      
      <Hero />
      <Companies />
      <CoursesSection />

    </div>
  )
}

export default Home