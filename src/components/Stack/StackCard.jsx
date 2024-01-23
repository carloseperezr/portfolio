import StackCSS from "./Stack.module.css";

export const StackCard = ({ img, alt }) => {
  return (
    <div className={`${StackCSS.stackCard}`}>
      <div className={`${StackCSS.stackCardImg}`}>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};
