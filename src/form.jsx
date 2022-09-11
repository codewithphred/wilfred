import React from "react";

function Form () {
    return (

        <div className="contact">
        <h1> Contact Me </h1>
        <h5>please input your details to contact me</h5>
        <div id="form" className="form">
          <label for="Full Name">
            {" "}
            <br /> Full Name{" "}
          </label>{" "}
          <br />
          <input type="text" placeholder="Enter your Full Name" /> <br />
          <label for="EMAIL">
            {" "}
            <br /> Email{" "}
          </label>{" "}
          <br />
          <input type="email" placeholder="Enter your Email" /> <br />
          <label for="number">
            {" "}
            <br /> Phone Number{" "}
          </label>{" "}
          <br />
          <input type="text" placeholder="Enter your Full Name" /> <br />
          <textarea rows="4" cols="50" name="comment">
            Enter your text
          </textarea>{" "}
          <br />
          <input className="submit" type="submit" />
        </div>


        <div className="footer">
          <h6>owoyemiwilfred@gmail.com</h6>
          <h6>Wilfred</h6>
        </div>
      </div>
    )
}
export default  Form;