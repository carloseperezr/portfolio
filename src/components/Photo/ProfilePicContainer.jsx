import ProfilePicCSS from "./ProfilePic.module.css";

export const ProfilePicContainer = ({ src }) => {
  return (
    <div className={`${ProfilePicCSS.profilePicContainer}`}>
      <div className={`${ProfilePicCSS.profilePicWrapper}`}>
        <img
          src="https://i.postimg.cc/MpBB6d3f/carlos-pic.jpg"
          alt="Carlos Profile Pic"
        />
        <a href="https://www.linkedin.com/in/carloseperezr/" target="_blank">
          Hablemos
        </a>
      </div>
    </div>
  );
};
