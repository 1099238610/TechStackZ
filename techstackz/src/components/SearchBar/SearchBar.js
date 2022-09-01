import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./SearchBar.css"
import {Button} from "../Button/Button";
import axios from "axios";
import ReactDOM from 'react-dom';






function SearchBar() {
  // states
  const [userInput, setUserInput] = useState("python")
  const [arr, setArr] = useState([])

  axios({
    method: 'get', //you can set what request you want to be
    url: 'http://3.26.190.60:8888/info/techList',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(result=> { setArr(result["data"])
  });

  // collect user input and store it to userInput state
  const handleTextChange = e => {
    setUserInput(e.target.value)
  }

  return (
    <>
      {/* search bar */}
      <div className={"search"}>
        <input className={"search__input"} defaultValue={"python"} type={"text"} id={"search"}
               onChange={handleTextChange} list={"datalist"}/>
      
      <datalist id={"datalist"}>
          {arr.map((value) =>{
            return <option key={value} value={value} />
          })}
    </datalist>
      

      </div>
      <p></p>
      <p></p>
      {/* search button and link to the techInformation page with userInput */}
      <Link to={`/techInformation/${userInput}`}>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Search</Button>
      </Link>
    </>
  )
}




export default SearchBar