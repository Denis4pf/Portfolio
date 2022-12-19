import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/Onwonga_">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://instagram.com/4pf_khafifa">
               <BsInstagram />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/onwong-a-orina-b7284b159/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:dennisonwonga155@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
