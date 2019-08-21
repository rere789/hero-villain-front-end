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
                <div className="grid">
                    <div className="item1">
                        <Card card={goodCard[Math.floor(Math.random()*goodCard.length)]}/>
                    </div>
                    <div className="item2">
                        <img className="pow" src={"https://previews.123rf.com/images/yayasyaya/yayasyaya1605/yayasyaya160500007/58039643-comic-book-page-divided-by-lines-with-speech-bubbles-rocket-hero-and-sounds-effect-retro-background-.jpg"}/>
                    </div>
                    <div className="item3">
                        <Card card={badCard[Math.floor(Math.random()*badCard.length)]}/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }




}

export default ConnectFour;