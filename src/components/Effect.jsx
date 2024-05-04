import React, { useEffect, useState } from 'react'

const Effect = () => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log("count",count); 
        
    })
}


 
    return (
      <div>Effect</div>
    )
  
}

export default Effect