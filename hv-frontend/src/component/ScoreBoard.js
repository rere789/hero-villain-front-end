import React from 'react'

class ScoreBoard extends React.Component{
    
    render(){
        console.log(this.props)
        return(
            <div>
               <div class="container">
               
                <h1 className="scoreheader" >Super Hero's vs Vilains</h1> 
                <hr/>
                <div><h4>Wins</h4>
                <h4>Losses</h4>
                </div>
                
                </div>
            </div>
        )
    }





}

export default ScoreBoard;