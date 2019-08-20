import React from "react"
import cover from './pagecover.jpg'
// import GameBoard from "../component/GameBoard";

class landing extends React.Component{

render(){
    return(
    <div>
        <header>
        <button className="landingBtn" onClick={(e)=> this.props.onClick(e)}>Sign up/ log in</button>
            </header>
            <img className="landingImg" src={cover}/>   

        {/* <GameBoard /> */}
            
            
    </div>   
    )
}



}

export default landing; 