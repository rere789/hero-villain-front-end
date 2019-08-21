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
      isAlliance: "",
      userResults: [],
      user: null,
      isNewUser: "",
      isNewEmail: "",
      isNewAlliance: ""
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

  isNewUserName=(e)=>{
    this.setState({isNewUser: e.target.value})
  }

  isNewEmail=(e)=>{
    this.setState({isNewEmail: e.target.value})
  }

  isAlliance=(e)=>{
    console.log(e.label)
    this.setState({isNewAlliance: e.label})
  }

  isUserEmail=(e)=>{
    this.setState({isUserEmail: e.target.value})
  }

  createUser=(e)=>{
    console.log(e.target.value)
  }

  isLoggedIn=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'accept' :"application/json"
      }, 
      body: JSON.stringify({
          username: this.state.isUserName, email: this.state.isUserEmail })
      
    }).then(res => res.json()).then(data => 
      {
      if(data.user.username === null ){
        return null 
      }else 
      this.setState({ user: data.user, loggedIn: true})
    }) 
  }

  isCreateNewUser=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/users",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'accept': "application/json"
      }, 
      body: JSON.stringify({
        username: this.state.isNewUser, email: this.state.isNewEmail, alliance: this.state.isNewAlliance})
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  render(){
  return (
    <div className="App">
     
      {this.state.loggedIn?
        <War result={this.state.userResults} user={this.state.user} cards={this.state.cards}/> 
        : <Landing users={this.state.users} isLoggedIn={this.isLoggedIn} isUserEmail={this.isUserEmail} 
              isNewEmail={this.isNewEmail} isNewUserName={this.isNewUserName} isAlliance={this.isAlliance}
              isUserName={this.isUserName} onClick={this.renderForm} clicked={this.state.clicked}/>}
    </div>
  )}
}

export default App;



