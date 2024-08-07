// Credit: https://medium.com/create-a-clocking-in-system-on-react/create-a-react-app-displaying-the-current-date-and-time-using-hooks-21d946971556

import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p>{date.toLocaleDateString('en-US', options)} {date.toLocaleTimeString()}</p>

        </div>
    )
}

export default DateTime