import BurgerCSS from "./Button.module.css";

export const BurguerIcon = ({ handleClick, clicked }) => {
  return (
    <div
      onClick={handleClick}
      className={`${BurgerCSS.navIcon}  ${clicked ? BurgerCSS.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
