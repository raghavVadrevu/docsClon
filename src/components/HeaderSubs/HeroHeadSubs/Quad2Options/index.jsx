import React, {useState} from "react";
import OptionElement from "../OptionElement";
import "../../../../styles/headerStyles/quad2.css"

function Quad2Options(props){

    const [activeDropDown, setActiveDropDown] = useState(null);

    const menuData = [
        { id: 0, buttonTitle: 'File', options: [{ id: 0, title: 'New' }, { id: 1, title: 'Edit' }, { id: 2, title: 'Make a copy' }] },
        { id: 1, buttonTitle: 'Edit', options: [{ id: 0, title: 'Undo' }, { id: 1, title: 'Redo' }, { id: 2, title: 'Cut' }] },
        { id: 2, buttonTitle: 'View', options: [{ id: 0, title: 'Print layout' }, { id: 1, title: 'Full screen' }, { id: 2, title: 'Show ruler' }] },
        { id: 3, buttonTitle: 'Insert', options: [{ id: 0, title: 'Image' }, { id: 1, title: 'Link' }, { id: 2, title: 'Table' }] },
        { id: 4, buttonTitle: 'Format', options: [{ id: 0, title: 'Text style' }, { id: 1, title: 'Paragraph styles' }, { id: 2, title: 'Align' }] },
        { id: 5, buttonTitle: 'Tools', options: [{ id: 0, title: 'Spelling and grammar' }, { id: 1, title: 'Word count' }, { id: 2, title: 'Translate' }] },
        { id: 6, buttonTitle: 'Extensions', options: [{ id: 0, title: 'Add-ons store' }, { id: 1, title: 'Manage extensions' }, { id: 2, title: 'Get more extensions' }] },
        { id: 7, buttonTitle: 'Help', options: [{ id: 0, title: 'Add-ons store' }, { id: 1, title: 'Manage extensions' }, { id: 2, title: 'Get more extensions' }] }
    ];

    const optionsObj = [{id: 0, title: 'File'}, {id:1, title: 'Edit'}, {id:2, title: 'View'}, {id: 3, title: 'Insert'}, {id: 4, title: 'Format'}, {id: 5, title: 'Tools'}, {id: 6, title: 'Extensions'}, {id: 7, title: 'Help'}];

    const returnOptions = () => {
        return optionsObj.map((option) => (
            <OptionElement key={option.id} option={option} activeDropDown={activeDropDown} setActiveDropDown={(val)=>setActiveDropDown(val)} content={menuData}/>
          ));
    }

    return(
        <div id="f2options">
            <ul id="f2optionsList">
                {returnOptions()}
            </ul>
        </div>
    )
}

export default Quad2Options;