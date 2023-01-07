import { React, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Footer.scss";

function Footer() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

   const [loading, setLoading] = useState(false);
   const { name, email, message } = formData;
   const handleChangeInput = (e) => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = () => {
      setLoading(true);

      const contact = {};
   };
   return (
      <>
         <h2 className="head-text">Take a coffee & chat with me</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} />
               <a href="mailto:dennisonwonga155@gmail.com" className="p-text">
               dennisonwonga155@gmail.com
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.mobile} />
               <a href="tel:+254 716124725" className="p-text">
               +254 716124725               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.twitter} />
               <a href="https://twitter.com/Onwonga_" className="p-text">
                  Onwonga_
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.linkedln} />
               <a
                  href="https://www.linkedin.com/in/Denis/"
                  className="p-text"
               >
                 onwong-a-orina-b7284b159
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} />
               <a href="https://github.com/Denis4pf" className="p-text">
                  Denis4pf
               </a>
            </div>
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Footer, "app__footer"),
   "contact",
   "app__whitebg"
);
