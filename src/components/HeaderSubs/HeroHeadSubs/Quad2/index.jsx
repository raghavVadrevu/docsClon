import React from "react";
import GoogleDocsImage from "../../../../assets/images/Google-Docs-logo.png";
import DocsCloneLogo from "../../../../assets/images/Docs Clone-logos.jpeg";
import Quad2Title from "../Quad2Title";
import Quad2Options from "../Quad2Options";
import "../../../../styles/headerStyles/quad2.css"

function Quad2() {
    return(
        <div className="frame2">
            <div id="f2logo">
                <img src={GoogleDocsImage} id="f2logoStyle"/>
            </div>
            <div id="f2wrapper">
                <Quad2Title>Untitle Documents</Quad2Title>
                <Quad2Options />
            </div>
        </div>
    )
}

export default Quad2;