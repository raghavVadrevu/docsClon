import React, {useState, useEffect} from 'react';
import Quad12 from '../../HeaderSubs/HeroHeadSubs/Quad12';
import Quad34 from '../../HeaderSubs/HeroHeadSubs/Quad34';
import "../../../styles/headerStyles/heroHeader.css"
import "../../../styles/containerStyles/main.css"

function HeroHeader(props){

    const [contentFormat, setContentFormat] = useState(props.contentFormat);

    return(
        <div className="frame">
            <Quad12 />
            <Quad34 contentFormat={contentFormat} />
        </div>
    )
}

export default HeroHeader;