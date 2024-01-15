import { ProfilePicContainer } from "../Photo/ProfilePicContainer";
import ContactCSS from "./Contact.module.css";

export const ContactContainer = () => {
  return (
    <div className={`${ContactCSS.contactContainer}`}>
      <div className={`${ContactCSS.contactInfoWrapper}`}>
        <ProfilePicContainer />
      </div>
    </div>
  );
};
