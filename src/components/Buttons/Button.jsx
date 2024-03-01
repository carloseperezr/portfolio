import ButtonCSS from "./Button.module.css";

export const Button = ({ text, style, functionOnclick }) => {
  return (
    <div
      onClick={functionOnclick}
      className={style ? `${ButtonCSS.hireBtn}` : ""}
    >
      <p>{text}</p>
    </div>
  );
};
