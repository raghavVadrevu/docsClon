import React from "react";
import "../../../styles/containerStyles/main.css"

function StandardPost(props){
    return(
        <div className="standardPost">
            {props.children}
        </div>
    )
}

export default StandardPost;