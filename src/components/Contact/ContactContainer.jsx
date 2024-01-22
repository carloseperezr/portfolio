import { ProfilePicContainer } from "../Photo/ProfilePicContainer";
import React, { forwardRef } from "react";
import ContactCSS from "./Contact.module.css";

const ContactContainer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${ContactCSS.contactContainer}`}>
      <div className={`${ContactCSS.contactInfoWrapper}`}>
        <ProfilePicContainer />
      </div>
    </div>
  );
});

export default ContactContainer;
