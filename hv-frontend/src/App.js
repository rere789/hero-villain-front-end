import React from 'react';
import './App.css';
import Landing from './container/Landing';
import ConnectFour from './container/ConnectFour';
import Form from './container/Form';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
// import GameBoard from "../component/GameBoard";

// import Card from './Card'


class App extends React.Component{
    state= {
      users: [],
      results: [],
      clicked: false,
      loggedIn: false,
      userLoggedIn:[],
      userResults: []
    }

    componentDidMount(){
        Promise.all([fetch("http://localhost:3000/api/v1/users"), fetch("http://localhost:3000/api/v1/results")])
        .then(([res1, res2]) =>{
          return Promise.all([res1.json(), res2.json()])
        })
        .then(([res1, res2]) => {
          this.setState({users: res1, results: res2})
        })
    }


  renderForm=(e)=>{
    console.log(e.target)
    this.setState({clicked: true})
  }


  renderGame=(e)=>{
    console.log('clicked')
  }


  isLoggedIn(e, user){

  }




  render(){
  return (
    <div className="App">
     <Landing onClick={this.renderForm} />
      
      {this.state.loggedIn?
        <ConnectFour /> 
        : null}
      

    </div>
  );
  }
}

export default App;



