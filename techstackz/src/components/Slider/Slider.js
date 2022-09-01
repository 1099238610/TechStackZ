import React from "react";
import "./Slider.css"
import {Link} from "react-router-dom";

export default function Slider() {
  return (
    <>
      {/* slider title */}
      <div className={"title__container"}>
        <h1 className={"title"}>See what's popular right now</h1>
      </div>
      {/* slider contents */}
      {/* NOTICE: Only 9 contents available due to the setting of css. If you want to change, contact Ziyang */}
      <div className={"slider"}>
        <div className={"slide-track"}>
          <Link to={"/techInformation/c"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/c.png"} alt={"c"}/>
            </div>
          </Link>
          <Link to={"/techInformation/c%2B%2B"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/cpp.png"} alt={"c++"}/>
            </div>
          </Link>
          <Link to={"/techInformation/c%23"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/csharp.png"} alt={"csharp"}/>
            </div>
          </Link>
          <Link to={"/techInformation/go"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/go.png"} alt={"go"}/>
            </div>
          </Link>
          <Link to={"/techInformation/java"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/java.png"} alt={"java"}/>
            </div>
          </Link>
          <Link to={"/techInformation/javascript"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/js.png"} alt={"js"}/>
            </div>
          </Link>
          <Link to={"/techInformation/lua"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/lua.png"} alt={"lua"}/>
            </div>
          </Link>
          <Link to={"/techInformation/python"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/python.png"} alt={"python"}/>
            </div>
          </Link>
          <Link to={"/techInformation/typescript"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/typescript.png"} alt={"typescript"}/>
            </div>
          </Link>
          <Link to={"/techInformation/ios"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/ios.png"} alt={"ios"}/>
            </div>
          </Link>
          <Link to={"/techInformation/linux"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/linux.png"} alt={"linux"}/>
            </div>
          </Link>
          <Link to={"/techInformation/gmail"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/gmail.png"} alt={"gmail"}/>
            </div>
          </Link>
          <Link to={"/techInformation/android"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/android.png"} alt={"android"}/>
            </div>
          </Link>
          <Link to={"/techInformation/redis"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/redis.png"} alt={"redis"}/>
            </div>
          </Link>


          <Link to={"/techInformation/c"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/c.png"} alt={"c"}/>
            </div>
          </Link>
          <Link to={"/techInformation/c%2B%2B"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/cpp.png"} alt={"c++"}/>
            </div>
          </Link>
          <Link to={"/techInformation/c%23"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/csharp.png"} alt={"csharp"}/>
            </div>
          </Link>
          <Link to={"/techInformation/go"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/go.png"} alt={"go"}/>
            </div>
          </Link>
          <Link to={"/techInformation/java"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/java.png"} alt={"java"}/>
            </div>
          </Link>
          <Link to={"/techInformation/javascript"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/js.png"} alt={"js"}/>
            </div>
          </Link>
          <Link to={"/techInformation/lua"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/lua.png"} alt={"lua"}/>
            </div>
          </Link>
          <Link to={"/techInformation/python"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/python.png"} alt={"python"}/>
            </div>
          </Link>
          <Link to={"/techInformation/typescript"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/typescript.png"} alt={"typescript"}/>
            </div>
          </Link>
          <Link to={"/techInformation/ios"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/ios.png"} alt={"ios"}/>
            </div>
          </Link>
          <Link to={"/techInformation/linux"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/linux.png"} alt={"linux"}/>
            </div>
          </Link>
          <Link to={"/techInformation/gmail"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/gmail.png"} alt={"gmail"}/>
            </div>
          </Link>
          <Link to={"/techInformation/android"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/android.png"} alt={"android"}/>
            </div>
          </Link>
          <Link to={"/techInformation/redis"}>
            <div className={"slide"}>
              <img src={"images/ScrollingBar/redis.png"} alt={"redis"}/>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}