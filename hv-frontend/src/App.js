import React from 'react';
import './App.css';
import Landing from './container/Landing';
import War from './container/War';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    state= {
      users: [],
      results: [],
      cards: [],
      clicked: false,
      loggedIn: false,
      isUserName: "",
      isEmail: "",
      userResults: [],
      user: []
    }

    componentDidMount(){
        Promise.all([fetch("http://localhost:3000/api/v1/users"), fetch("http://localhost:3000/api/v1/results"), fetch("http://localhost:3000/api/v1/cards")])
        .then(([res1, res2, res3]) =>{
          return Promise.all([res1.json(), res2.json(), res3.json()])
        })
        .then(([res1, res2, res3]) => {
          this.setState({users: res1, results: res2, cards: res3})
        })
    }

  renderForm=(e)=>{
    console.log(e.target)
    this.setState({clicked: true})
  }

  renderGame=(e)=>{
    console.log('clicked')
  }

  isUserName=(e)=>{
    this.setState({isUserName: e.target.value}, () => console.log(this.state.isUserName))
  }

  isUserEmail=(e)=>{
    this.setState({isEmail: e.target.value})
    this.isLoggedIn()
  }

  isLoggedIn=(e)=>{
    this.setState({loggedIn: true})
    let currentUser = this.state.users.filter(u => u.username === this.state.isUserName)
    console.log("app", currentUser)
    let id = currentUser.id
    let isUserResults = this.state.results.filter(result => result.user_id === id)
    this.setState({userResults: isUserResults, user: currentUser})
  }


  render(){
  return (
    <div className="App">
     
      
      {this.state.loggedIn?
        <War result={this.state.userResults} user={this.state.user} cards={this.state.cards}/> 
        : <Landing isloggedIn={this.isLoggedIn} isUserEmail={this.isUserEmail} isUserName={this.isUserName} onClick={this.renderForm} clicked={this.state.clicked}/>}
      

    </div>
  );
  }
}

export default App;



