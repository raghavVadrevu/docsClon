import React, {useState, useEffect} from 'react';
import Describer from '../../../../../Describer';
import "../../../../../../styles/headerStyles/quad34.css"

function SelectColor(props){

    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(false);

    const colorHexCodes = [
        "#000000", "#333333", "#666666", "#999999", "#CCCCCC", "#FFFFFF", 
        "#FF0000", "#FF9900", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", 
        "#FF00FF", "#9900FF", "#FF0099", "#FF6600", "#FFCC00", "#CCFF00", 
        "#99FF00", "#00FF66", "#00FFCC", "#0066FF", "#0033CC", "#9900CC", 
        "#CC00FF", "#FF0066", "#FF3366", "#FF6633", "#FFCC66", "#CCFF99", 
        "#99FF66", "#66FF99", "#66FFCC", "#66CCFF", "#6699FF", "#9966FF", 
        "#FF99CC", "#FFCC99", "#FFCCCC", "#FFCCFF", "#CCFFCC", "#99FFCC", 
        "#66CC99", "#66CC66", "#66CC33", "#CCFF66", "#CC9966", "#CC6633", 
        "#993300", "#996633", "#999966", "#669933", "#336600", "#663300", 
    ];

    const colorObjects = colorHexCodes.map((hex, index) => ({
        id: index,
        color: hex,
    }));
      
    const ColorPicker = () => {
        return (
            <div className="colorPicker">
                {colorObjects.map((color) => (
                    <div key={color.id} className='colorPickerButton' style={{backgroundColor: color.color}} onClick={()=>props.setColor(color.color)}></div>
                ))}
            </div>
        );
    };    

    return (
        <button className={hovered && !selected?"singleIconHovered":selected?"singleIconSelected":"singleIcon"} onClick={()=>setSelected(!selected)} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>{props.children}{hovered && !selected && <Describer description={props.description}/>}{selected && <ColorPicker />}</button>
    )
}

export default SelectColor;