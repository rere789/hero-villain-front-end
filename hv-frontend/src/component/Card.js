import React from 'react'



const Card = (props) => {
    return (
        <div className="card" >
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <img className="card-img-top" src={props.card.image}alt="Card image cap"/>
            <div class="card-body">         
            <h2 className="card-text">{props.card.name}</h2>
            <p className="card-text" >Alliance: {props.card.alliance}</p>
            <p className="card-text" >Strength: {props.card.strength}</p>
            <p className="card-text" >Speed: {props.card.speed}</p>
            <p className="card-text">{props.card.bio}</p>
            <p className="card-text">Special Move: {props.card.special_move}</p>
            </div>   
        </div>
    )
}


export default Card
