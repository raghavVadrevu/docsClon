import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormat, setFormat } from "../../../../reducers/heroPageReducer";
import "../../../../styles/headerStyles/quad34.css";
import SingleIcon from "../ToolButtons/SingleIcon";
import SelectColor from "../ToolButtons/DropDown/SelectColor";
import SelectAlign from "../ToolButtons/DropDown/SelectAlign";
import * as Icons from '@mui/icons-material';

function Quad34() {

  const dispatch = useDispatch();
  const contentFormat = useSelector((state) => state.heroPage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      dispatch(getFormat());
      setLoading(false);
  }, [dispatch]);

  const fragment1 =[
    { id: 0, description: 'Search the menus', iconName: 'Search', color: '#3e5871', active: false },
    { id: 1, description: 'Undo', iconName: 'Undo', color: '#3e5871', active: false },
    { id: 2, description: 'Redo', iconName: 'Redo', color: '#3e5871', active: false },
    { id: 3, description: 'Print', iconName: 'Print', color: '#3e5871', active: false },
    { id: 4, description: 'Spelling/Grammar check', iconName: 'Spellcheck', color: '#3e5871', active: false },
    { id: 5, description: 'Paint format', iconName: 'FormatPaintRounded', color: '#3e5871', active: false },
  ];

  const fragment2 = [
    { id: 6, description: 'Bold', iconName: 'FormatBold', color: '#3e5871', active: contentFormat.bold},
    { id: 7, description: 'Italic', iconName: 'FormatItalic', color: '#3e5871', active: contentFormat.italic },
    { id: 8, description: 'Underline', iconName: 'FormatUnderlined', color: '#3e5871', active: contentFormat.underlined },
    { id: 9, description: 'Text color', iconName: 'FormatColorTextTwoTone', color: contentFormat.textColor, active: false },
    { id: 10, description: 'Highlight color', iconName: 'BorderColor', color: contentFormat.highlightColor, active: false }
  ];

  const fragment3 = [
    { id: 11, description: 'Font size', iconName: 'FormatBold', color: '#3e5871', active: false},
    { id: 12, description: contentFormat.align.description, iconName: contentFormat.align.icon, color: '#3e5871', active: false}
  ];

  const Divider = () => <div className="divider"></div>;

  function changeVal({id, val}){

    const f2 = fragment2;

    const f3 = fragment3;

    if(id < 6){
      return;
    }
    else if(id < 9){
      f2[id-6].active = val;
    }
    else if( id === 12){
      f3[1].description = val.description;
      f3[1].iconName = val.icon;
    }
    else{
      f2[id-6].color = val;
    }

    let format = {bold: f2[0].active, italic: f2[1].active, underlined: f2[2].active, textColor: f2[3].color, highlightColor: f2[4].color, align: {description: f3[1].description, icon: f3[1].iconName}, fontSize: contentFormat.fontSize};

    dispatch(setFormat(format));
  }

  function Icon({ id, description, iconName, color, active }) {
    const IconComponent = Icons[iconName];
    if (!IconComponent) {
      return null;
    }

    return (
      id < 9?<SingleIcon description={description} active={active} setActive={(val)=>changeVal({id, val})}>
        {React.cloneElement(<IconComponent />, { style: { color: color } })}
      </SingleIcon>:id === 12?<SelectAlign description={description} active={active} setAlign={(val)=>changeVal({id, val})}>
        {React.cloneElement(<IconComponent/>, { style: { color: color } })}
      </SelectAlign>:<SelectColor description={description} active={active} setColor={(val)=>changeVal({id, val})}>
        {React.cloneElement(<IconComponent/>, { style: { color: color } })}
      </SelectColor>
    );
  }

  return loading ? (
    <div>loading</div>
  ) : (
      <div className="frame34">
        {fragment1.map((data, index) => (
          <React.Fragment key={index}>
            <Icon {...data} />
          </React.Fragment>
        ))}
        <Divider />
        {fragment2.map((data, index) => (
          <React.Fragment key={index}>
            <Icon {...data} />
          </React.Fragment>
        ))}
        <Divider />
        {fragment3.map((data, index) => (
          <React.Fragment key={index}>
            <Icon {...data} />
          </React.Fragment>
        ))}
      </div>
    );
}

export default Quad34;
