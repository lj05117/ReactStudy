import React from 'react';
import ReactDOM from 'react-dom/client';
import { InView, useInView } from "react-intersection-observer";
// import Introduce from "./elements/Introduce";

const App = () => {
  const [ref, inView]=useInView()
  return (
    <div ref={ref}>
      Element {InView.toString()}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


