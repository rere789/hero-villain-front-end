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
      user: null,
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
    // (this.state.users.map(user => user.username).includes(e.target.value))?
    this.setState({isUserName: e.target.value}, () => console.log(this.state.isUserName))
    // : alert("Not valid username")
  }

  isUserEmail=(e)=>{
    // (this.state.users.map(user => user.email).includes(e.target.value))?
    this.setState({isUserEmail: e.target.value})
    // : alert("Not valid email")
    // this.isLoggedIn()
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
    }
    
    ) 
    // 

  //   this.setState({loggedIn: true})
  //   let currentUser = this.state.users.filter(u => u.username === this.state.isUserName)
  //   console.log("app", currentUser)
  //   let id = currentUser.id
  //  let isUserResults = this.state.results.filter(result => result.user_id === id)
  //   this.setState({userResults: isUserResults, user: currentUser, loggedIn: true})
  }


  render(){
  return (
    <div className="App">
     
      
      {this.state.loggedIn?
        <War result={this.state.userResults} user={this.state.user} cards={this.state.cards}/> 
        : <Landing users={this.state.users} isLoggedIn={this.isLoggedIn} isUserEmail={this.isUserEmail} isUserName={this.isUserName} onClick={this.renderForm} clicked={this.state.clicked}/>}
      

    </div>
  );
  }
}

export default App;



