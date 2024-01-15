import ButtonCSS from "./Button.module.css";

export const Button = ({ text, style }) => {
  return <div className={style ? `${ButtonCSS.hireBtn}` : ""}>{text}</div>;
};
