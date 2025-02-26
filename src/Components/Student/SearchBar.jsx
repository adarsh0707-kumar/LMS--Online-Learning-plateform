import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";
import './SearchBar.css';


const SearchBar = ({ data }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState(data ? data : '');

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate('/course-list/' + input);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-bar">
      <img
        src={assets.search_icon}
        alt="Search Icon"
        className="search-icon"
      />
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for Courses"
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
