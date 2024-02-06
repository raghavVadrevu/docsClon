import React, {useState, useEffect} from 'react';
import "./style.css"

function Describer(props) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setShow(true);
        }, 500);
    
        return () => {
          clearTimeout(timeoutId);
        };
    }, []); 

    return show ? (
        <div className='describer'>
            <p style={{ fontSize: 11, color: '#fff', letterSpacing: 0.5, width: 'auto', whiteSpace: 'nowrap' }}>{props.description}</p>
        </div>
    ) : null;
}

export default Describer;