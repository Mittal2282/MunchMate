import { useState } from "react";

const User = ({name,location}) => {
    const [count1]=useState(0);
    const [count2]=useState(2);
  return(
    <div className="user-card">
        <h2>Count1:{count1}</h2>
        <h2>Count2:{count2}</h2>
        <h2>Name:{name}</h2>
        <h2>Location: {location} (from Function)</h2>
        <h2>Contact: 7015691416</h2>
    </div>
  )
};

export default User;
