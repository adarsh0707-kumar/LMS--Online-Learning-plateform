import { useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
import { useState } from "react";


const SearchBar = ({data}) => {

  const navigate = useNavigate();

  const [input, setInput] = useState(data ? data : '');

  const onSearchHandlear = (e) => {
    e.preventDefault();
    navigate('/course-list/' + input)
  }

  return (
    <>
      <form
        onSubmit={
          onSearchHandlear
        }
        className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded">
        <img
          src={assets.search_icon}
          alt="Search_Icon"
          className="md:w-auto w-10 px-3"
        />
        <input
          onChange={
            e => {
              setInput(e.target.value)
            }
          }
          value={input}
          type="text"
          placeholder="Search for Courses"
          className="w-full outline-none text-gray-500/80"
        />

        <button
          type="submit"
          className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1">
          Search
        </button>

      </form>
    </>
  )
}

export default SearchBar