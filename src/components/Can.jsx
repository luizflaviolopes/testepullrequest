import React from "react";

const Can = ({ component: Component, children }) => {
    
    const logged= localStorage.getItem("@obz-Token");
    
    if(logged)
    return(
    <div>
    {children}
    </div>
  );
        else
        return null

}


  export default Can