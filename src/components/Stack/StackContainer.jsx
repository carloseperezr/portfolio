import StackCSS from "./Stack.module.css";
import { StackCard } from "./StackCard";
import Marquee from "react-fast-marquee";

const StackContainer = () => {
  return (
    <div className={`${StackCSS.stackContainer}`}>
      <div className={`${StackCSS.stackInfo}`}>
        <div>
          <h2>Stack</h2>
        </div>
        <div className={`${StackCSS.stackIcons}`}>
          <div className={`${StackCSS.stackImg}`}>
            <Marquee gradient={true} gradientColor={"#FBFAF3"}>
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
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                }
                alt="Jest"
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
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackContainer;
