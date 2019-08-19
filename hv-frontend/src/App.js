import React from 'react';
import './App.css';
import Landing from './container/Landing';
import ConnectFour from './container/ConnectFour';
import Form from './container/Form';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    state= {
      clicked: false,
      loggedIn: false
    }

  renderForm=(e)=>{
    console.log(e.target)
    this.setState({clicked: true})
  }


  render(){
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Barriecito|Chewy|Faster+One|Freckle+Face|Montserrat+Subrayada|Rock+Salt|Saira+Stencil+One&display=swap" rel="stylesheet" />
      {this.state.clicked?  <Form/> 
      :<Landing onClick={this.renderForm}/>}
      
      {this.state.loggedIn?
        <ConnectFour />
        : null}
      
    </div>
  );
  }
}

export default App;
