import React from 'react';
import ReactDOM from 'react-dom/client';
// import { InView, useInView } from "react-intersection-observer";
import Introduce from "./elements/Introduce";
import Contact from "./elements/Contact";
import Skill from "./elements/Skill";
import Project from "./elements/Project";

const App = () => {
  // const [ref, inView]=useInView()
  // return (
    // <div ref={ref}>
      // Element {InView.toString()}
    // </div>
  // )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Introduce />
    <Skill />
    <Project/>
    <Contact/>
  </React.StrictMode>
);


