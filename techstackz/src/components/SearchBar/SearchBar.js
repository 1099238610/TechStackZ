import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./SearchBar.css"
import {Button} from "../Button/Button";

function SearchBar() {
  // states
  const [userInput, setUserInput] = useState("python")

  // collect user input and store it to userInput state
  const handleTextChange = e => {
    setUserInput(e.target.value)
  }

  return (
    <>
      {/* search bar */}
      <div className={"search"}>
        <input className={"search__input"} defaultValue={"python"} type={"text"} id={"search"}
               onChange={handleTextChange}/>
      </div>
      <p></p>
      <p></p>
      {/* search button and link to the techInformation page with userInput */}
      <Link to={`/techInformation/${userInput}`}>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GO SEARCH</Button>
      </Link>
    </>
  )
}

export default SearchBar