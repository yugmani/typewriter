import React from "react";
import Typewriter from "react-simple-typewriter"; //npm i react-simple-typewriter
import "react-simple-typewriter/dist/index.css";

function TypeWriter() {
  return (
    <div>
      <div className="simple-writer">
        I love{" "}
        <span style={{ color: "blue", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop
            cursor
            cursorStyle="!"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={500}
            words={["JavaScript", "React", "Python", "MongoDB!"]}
            onLoop={(loopCount) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
        </span>
      </div>
    </div>
  );
}

export default TypeWriter;
