import React from "react";
import "../../../../styles/headerStyles/quad1.css"
import ProfileIcon from "../../../../assets/images/profile-icon-9.png"

function Quad1() {
    return (
        <div className="frame1">
            <div id="f1profilePic">
                <img id="f1profileImage" src={ProfileIcon}/>
            </div>
        </div>
    )
}

export default Quad1;