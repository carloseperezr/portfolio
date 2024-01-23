import React, { useRef } from "react";
import StackCSS from "./Stack.module.css";
import { StackCard } from "./StackCard";

const StackContainer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${StackCSS.stackContainer}`}>
      <div className={`${StackCSS.stackImg}`}>
        <div className={`${StackCSS.stackInfo}`}>
          <div>
            <h2>Stack</h2>
          </div>
          <div className={`${StackCSS.stackIcons}`}>
            <StackCard
              img={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              }
              alt="HTML"
            />
            <StackCard
              img={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              }
              alt="CSS"
            />
            <StackCard
              img={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              }
              alt="Tailwind"
            />
            <StackCard
              img={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
              alt="JavaScript"
            />
            <StackCard
              img={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              }
              alt="React"
            />
            <StackCard
              img={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              }
              alt="Redux"
            />
            <StackCard
              img={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              }
              alt="Git"
            />
            <StackCard
              img={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              }
              alt="GitHub"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default StackContainer;
