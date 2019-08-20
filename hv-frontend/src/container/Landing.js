import React from "react"
import cover from './pagecover.jpg'
import Form from './Form'

class landing extends React.Component{

render(){
    console.log(this.props.isLoggedIn)
    return(
   
     <div>
         <header>
         <link href="https://fonts.googleapis.com/css?family=Barriecito|Chewy|Faster+One|Freckle+Face|Montserrat+Subrayada|Rock+Salt|Saira+Stencil+One&display=swap" rel="stylesheet" />
      
         <button className="landingBtn" onClick={(e)=> this.props.onClick(e)}>Sign up/ log in</button>
            </header>
              
             {this.props.clicked?  <Form isUserEmail={this.props.isUserEmail} isUserName={this.props.isUserName} isLoggedIn={this.props.isLoggedIn} />  :  <img className="landingImg" src={cover}/>   }     
            
    </div>   
    )
}



}

export default landing; 