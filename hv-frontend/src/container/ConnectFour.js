import React from 'react';
import Card from '../component/Card'
import ScoreBoard from '../component/ScoreBoard';



class ConnectFour extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <header>Score Board
                    <ScoreBoard />
                </header>
                <div>
                <div class="row">
                    <div className="column">
                        <Card/>
                    </div>
                    <div className="column">
                        Game Board
                    </div>
                    <div className="column">
                        <Card/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }



}

export default ConnectFour;