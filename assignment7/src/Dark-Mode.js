import React, {Component}from "react";

class Dark_Mode extends Component{

    onClick = (e)=>{
        var element = document.body
        element.classList.toggle("dark-mode");
        /*
        element= document.getElementById("header2");
        element.classList.toggle("dark-mode");
      
        element = document.getElementById("article");
        element.classList.toggle("dark-mode");
        
        var element = document.getElementById("footer");
        element.classList.toggle("dark-mode");
        */
      };

    render(){
        return(
            
            <div className="dark-white-mode"> 
                <button type="button" title="dark-mode" id="button1" onClick={this.onClick}> Dark mode</button>
            </div>
            
        )
    }

}


export default Dark_Mode