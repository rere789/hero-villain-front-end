import React from 'react';
// import HeroCard from './Cards/HeroCard'
// import VillianCard from './Cards/VillianCard'
import ScoreBoard from '../component/ScoreBoard';
import Card from  '../component/Card'



class ConnectFour extends React.Component{
   
    render(){
        let badCard = this.props.cards.filter(card => card.alliance === "bad")
        let goodCard = this.props.cards.filter(card => card.alliance === "good")
        return(
            <div>

                <header>
                    <ScoreBoard result={this.props.result} user={this.props.user}/>
                </header>
                <div>
                <div className="row">
                    <div className="column">
                        <Card card={goodCard[Math.floor(Math.random()*goodCard.length)]}/>
                    </div>
                    <div className="column">
                        <img src={"https://s3-media1.fl.yelpcdn.com/bphoto/1Nu5WzGl1fWg7XltzkZRfQ/ls.jpg"}/>
                    </div>
                    <div className="column">
                        <Card card={badCard[Math.floor(Math.random()*badCard.length)]}/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }



}

export default ConnectFour;