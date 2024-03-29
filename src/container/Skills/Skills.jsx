import { React, useState, useEffect } from "react";
import RaectTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";
function Skills() {
   const skills = [
      {
         name: "HTML",
         icon: images.html,
         bgColor: "#edf2f8",
      },
      {
         name: "CSS",
         icon: images.css,
         bgColor: "#313bac",
      },
     
      {
         name: "JavaScript",
         icon: images.javascript,
         bgColor: "#edf2f8",
      },
      {
         name: "Reactjs",
         icon: images.react,
         bgColor: "#edf2f8",
      },
      {
         name: "Ruby on Rails",
         icon: images.ruby,
         bgColor: "#FFFAFA",

      },
      {
         name: "Linux",
         icon: images.linux,
         bgColor: "#FFFAFA",
      },

      {
         name: "Tailwind CSS",
         icon: images.tailwind,
         bgColor: "#6b7688",
      },
      {
         name: "Technical Writer",
         icon: images.writer,
         bgColor: "#46364a",
      },
   ];
   return (
      <>
         <h2 className="head-text">Skills</h2>
         <div className="app__skills-container">
            <motion.div className="app__skills-list">
               {skills.map((skill) => (
                  <motion.div
                     whileInView={{ opacity: [0, 1] }}
                     transition={{ duration: 0.5 }}
                     className="app__skills-item app__flex"
                     key={skill.name}
                  >
                     <div
                        className="app__flex"
                        style={{ backgroundColor: skill.bgColor }}
                     >
                        <img src={skill.icon} alt="skill" />
                     </div>
                     <p className="p-text">{skill.name}</p>
                  </motion.div>
               ))}
            </motion.div>
              
         </div>
 
      </>
   );
}

export default AppWrap(
   MotionWrap(Skills, "app__skills"),
   "skills",
   "app__whitebg"
);
