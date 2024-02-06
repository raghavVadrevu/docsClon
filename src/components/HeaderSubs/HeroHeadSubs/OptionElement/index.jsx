import React, {useEffect, useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../../../../styles/headerStyles/quad2.css";

function DropDown(props) {

    const options = props.content.options;

    const Element = () => {
        return options.map((entity) => (
            <button id="f2optionsDropDownButton"><p style={{fontSize: 15, fontWeight: 500}}>{entity.title}</p><ArrowForwardIosIcon style={{ color: 'black', fontSize: 15 }} /></button>
         ))
    }

    return (
        <div id="dropDown">
            <Element />
        </div>
    );
}

function OptionElement(props) {

    const [highlight, setHighLight] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('button')) {
            setHighLight(false);
            props.setActiveDropDown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [highlight]);
    

    function hover(){
        props.activeDropDown===null?setHighLight(true):[props.setActiveDropDown(props.option.id), setHighLight(true)];
    }

    function unHover(){
        props.option.id===props.activeDropDown?setHighLight(!highlight):setHighLight(false);
    }

    function click(){
        props.option.id===props.activeDropDown?props.setActiveDropDown(null):[props.setActiveDropDown(props.option.id), setHighLight(true)];
    }

    return (
        <li key={props.option.id} id="f2optionsElement">
            <button id={highlight?"f2optionsElementButtonHovered":"f2optionsElementButton"} onClick={()=>click()} onMouseEnter={()=>hover()} onMouseLeave={()=>unHover()}>{props.option.title}</button>
            {props.activeDropDown === props.option.id && <DropDown content={props.content[props.option.id]} />}
        </li>
    )
}

export default OptionElement;