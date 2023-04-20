import React from "react";
import { About, Header, Work, Skills, Resume, Footer, } from "./container";
import { Navbar } from "./components";
import "./App.scss";
function App() {
   return (
      <div className="app">
         <Navbar />
         <Header />
         <About />
         <Work />
         <Skills />
         <Resume />
         <Footer />
      </div>
   );
}

export default App;


