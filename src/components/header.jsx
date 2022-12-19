import React from "react";
import img from "../images/willy.jpg"

function  Header () {
    return (
        <header>
        <h1 className="b5"> Wilfred's Keeper App</h1>
        <img src={img} alt="" srcset="" />
        </header>
    )
}
export default Header;