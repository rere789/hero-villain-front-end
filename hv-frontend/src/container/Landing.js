import React from "react"
import cover from './pagecover.jpg'

class landing extends React.Component{

render(){
    return(
     <div>
         <header>
         <button className="landingBtn" onClick={(e)=> this.props.onClick(e)}>Sign up/ log in</button>
            </header>
             <img className="landingImg" src={cover}/>          
            
     </div>   
    )
}



}

export default landing; 