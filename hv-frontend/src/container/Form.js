import React from 'react';
import Select from 'react-select';

const alliance = [
    { label: "Super Hero", value: 1 },
    { label: "Villain", value: 2 },]

class Form extends React.Component{
    
    
    render(){
        return(
            <section className="formBody">
            <div className="container">
            <form  onSubmit={this.props.CreateUser} className="form">
           
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label name="username"><b>Username</b></label>
            <input onChange={this.props.isNewUserName} type="text" placeholder="Enter Username" name="isNewUsername" required />

            <label name="email"><b>Email</b></label>
            <input onChange={this.props.isNewEmail} type="text" placeholder="email" name="isNewEmail" required/>

            <Select onChange={this.props.isAlliance} options={ alliance } name="alliance">
            </Select>


            <div className="clearfix">
                <button type="submit"  className="signupbtn">Sign Up</button>
                </div>
    
           
        </form>

            <form onSubmit={this.props.isLoggedIn} className="form">
           
            <h1>Log in</h1>
            <hr/>
            <label name="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" onChange={this.props.isUserName} name="isUsername" required />

            <label name="email"><b>Email</b></label>
            <input type="text" placeholder="email" onChange={this.props.isUserEmail} name="isEmail" required/>

            <div className="clearfix">
                <button type="submit"  value="submit" >log in</button>
                </div>
           
        </form>
        </div>
        </section>
        )
    }


}

export default Form;