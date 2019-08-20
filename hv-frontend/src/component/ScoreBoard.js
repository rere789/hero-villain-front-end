import React from 'react'

class ScoreBoard extends React.Component{
    constructor(props){
        super(props)
    }

    

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>ScoreBoard</h1>
                <h2>Welcome back {this.props.user.username}</h2>
                <h3>Losses: {this.props.result.losses}</h3>
                <h3>wins: {this.props.result.wins}</h3>
            </div>
        )
    }





}

export default ScoreBoard;