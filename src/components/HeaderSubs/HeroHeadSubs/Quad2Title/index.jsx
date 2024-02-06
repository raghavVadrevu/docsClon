import React from "react";
import "../../../../styles/headerStyles/quad2.css"

function Quad2Title(props){
    return(
        <div id="f2title">
            <p id="f2titleElement">{props.children}</p>
        </div>
    )
}

export default Quad2Title;