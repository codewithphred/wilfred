import React from "react";
import img from "./images/img.jpg";
import Nav from "./nav.jsx";
import Home from "./home.jsx";
import Button from "./button.jsx";
import About from "./about.jsx";
import Form from "./form.jsx";
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Button />
      <img src={img} alt="" />
      <About />
      <Form />
    </div>
  );
}
export default App;
