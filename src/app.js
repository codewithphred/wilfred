import React from "react";
import { FormLabel } from "react-bootstrap";


function App () {
 return (
        <div>
             <ul>
                <li> <a href="home">Home</a></li>
                <li> <a href="about">About</a></li>
                <li> <a href="form">Contact</a></li>
             </ul>
          <div id="home" className="about">
                <h1>WELCOME</h1>
               <h3>I,M Wilfred, <span>A FrontEnd Web developer</span>  </h3>    
               </div>
                      <div className="allbtn">
                      <button className="hire"> Hire me </button>
                      <button className="resume"> Get Resume </button>
                      </div>
                      <hr />

                      <div id="about" className="row">
                        <div className="grids col-md-6">
                          <h3>HTML5</h3>
                          <h5>A sound knowledge And fully fledged  </h5> <span>Understanding in HTML5</span> <br></br>
                          <button className="hire" >learn more</button>
                        </div>
                        <div className="grids col-md-6">
                          <h3>CSS3</h3>
                          <h5>A Solid Experience And fully fledged  </h5> <span>Understanding in CSS3</span> <br></br>
                          <button className="hire" >know more</button>
                        </div>
                        <div className="grids col-md-6">
                          <h3>BOOTSTRAP</h3>
                          <h5> Good knowledge And fully fledged  </h5> <span>Understanding in BOOTSTRAP</span> <br></br>
                          <button className="hire" >learn more</button>
                        </div>
                        <div className="grids col-md-6">
                          <h3>JAVASCRIPT</h3>
                          <h5>A sound knowledge And fully fledged  </h5> <span>Understanding in HTML5</span> <br></br>
                          <button className="hire" >learn more</button>
                        </div>
                        <div className="grids col-md-6">
                          <h3>REACT.JS</h3>
                          <h5>A sound knowledge And fully fledged  </h5> <span>Understanding of REACT</span> <br></br>
                          <button className="hire" >learn more</button>
                        </div>
                        
                      </div>
                   <hr />
                   <div className="contact">
                   <h1> Contact Me </h1>
                   <h5>please input your details to contact me</h5>
                   <div id="form" className="form" > 
                       <label for="Full Name"> <br /> Full Name </label>  <br />
                       <input type="text" placeholder="Enter your Full Name" />  <br />
                       <label for="EMAIL"> <br /> Email </label>  <br />
                       <input type="email" placeholder="Enter your Email" /> <br />
                       <label for="number"> <br /> Phone Number </label>  <br />
                       <input type="text" placeholder="Enter your Full Name" /> <br />
                   <textarea rows="4" cols="50" name="comment">Enter your text</textarea>  <br />
                   <input className="submit" type="submit" />
                   
               
               
                   </div>

                   <div className="footer">
                     <h6>owoyemiwilfred@gmail.com</h6>
                     <h6>Wilfred</h6>
                   </div>
               
          
                
                   </div>
        </div>)
}
export default App;