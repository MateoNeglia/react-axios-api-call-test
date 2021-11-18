import React, { useEffect } from 'react'
import { axios2 } from "./axios";
import { useState } from 'react';
import ReactGA from 'react-ga';

function ButtonCounter() {
    
    const [buttonClicks, setButtonCount] = useState('');
    
    const handleClick = async () => {
        ReactGA.event({
            category: 'Button',
            action: 'The Button on the Employee Page was clicked'
        });

        const response = await axios2.get().catch((err) => {
          console.log("Error:", err);
       });

       console.log('response button api: ', response);           
       if (response) setButtonCount(response.data.value);

    }      
      
    
    return (
        <div>
            <button onClick={handleClick}>Click Here!</button>
            <p>Button Clicks: {buttonClicks}</p>
        </div>
    )
}

export default ButtonCounter;