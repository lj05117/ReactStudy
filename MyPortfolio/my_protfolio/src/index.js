import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { InView, useInView } from "react-intersection-observer";
import Introduce from "./elements/Introduce";
import Contact from "./elements/Contact";
import Skill from "./elements/Skill";
import Project from "./elements/Project";
import Header from "./elements/Header";

// const App = () => {
//   // const [ref, inView]=useInView()
//   // return (
//     // <div ref={ref}>
//       // Element {InView.toString()}
//     // </div>
//   // )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/introduce" element={<Introduce />}></Route>   
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


