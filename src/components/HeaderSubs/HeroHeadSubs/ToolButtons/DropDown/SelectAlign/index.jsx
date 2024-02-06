import React, { useState } from 'react';
import Describer from '../../../../../Describer';
import '../../../../../../styles/headerStyles/quad34.css';
import * as Icons from '@mui/icons-material';

function SelectAlign(props) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const [hoveredAlignments, setHoveredAlignments] = useState([false, false, false, false]);

  const alignments = [
    { id: 0, description: 'Left align', icon: 'FormatAlignLeft' },
    { id: 1, description: 'Center align', icon: 'FormatAlignCenter' },
    { id: 2, description: 'Right align', icon: 'FormatAlignRight' },
    { id: 3, description: 'Justified', icon: 'FormatAlignJustify' },
  ];

  const Icon = ({ icon }) => {
    const IconComponent = Icons[icon];
    return <IconComponent />;
  };

  const AlignPicker = () => {
    const onHover = (id) => setHoveredAlignments(hoveredAlignments.map((_, index) => index === id));

    const unHover = (id) => setHoveredAlignments(hoveredAlignments.map((_, index) => index !== id));

    return (
      <div className="alignPicker">
        {alignments.map((align) => (
          <button
            key={align.id}
            className='singleIcon2'
            onClick={() => props.setAlign({ description: align.description, icon: align.icon })}
          >
            <Icon icon={align.icon} />
          </button>
        ))}
      </div>
    );
  };

  return (
    <button
      className={`singleIcon ${hovered && !selected ? 'singleIconHovered' : ''} ${selected ? 'singleIconSelected' : ''}`}
      onClick={() => setSelected(!selected)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.children}
      {hovered && !selected && <Describer description={props.description} />}
      {selected && <AlignPicker />}
    </button>
  );
}

export default SelectAlign;
