import React, {useState, useEffect} from 'react';
import Describer from '../../../../Describer';
import "../../../../../styles/headerStyles/quad34.css"

function SingleIcon(props){

    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(props.active || false);

    useEffect(() => {
         selected !== props.active?props.setActive(selected):null;
    }, [selected]);

    return (
        <button className={hovered && !selected?"singleIconHovered":selected?"singleIconSelected":"singleIcon"} onClick={()=>setSelected(!selected)} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>{props.children}{hovered && <Describer description={props.description}/>}</button>
    )
}

export default SingleIcon;