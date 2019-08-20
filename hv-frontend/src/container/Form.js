import React from 'react';
import Select from 'react-select';

const alliance = [
    { label: "Super Hero", value: 1 },
    { label: "Villain", value: 2 },

]

class Form extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <section className="formBody">
            <div className="container">
            <form action="action_page.php" className="form">
           
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="isNewUsername" required />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="email" name="isNewEmail" required/>

            <Select options={ alliance } />

            <div class="clearfix">
                <button type="submit" onClick={this.props.isLoggedIn} className="signupbtn">Sign Up</button>
                </div>
    
           
        </form>

            <form action="action_page.php" className="form">
           
            <h1>Log in</h1>
            <hr/>
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="isUsername" required />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="email" name="isEmail" required/>

            <div class="clearfix">
                <button type="submit" onClick={this.props.isLoggedIn} className="signupbtn">log in</button>
                </div>
           
        </form>
        </div>
        </section>
        )
    }


}

export default Form;