import React, {Component} from 'react';
import './register.scss'
import firebase from '../../../config/firebase'

class Register extends Component{
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value, 
        })

    }

    handleRegister = () => {
        const {email, password} = this.state;
        console.log('data before send', email, password)  

        firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(res => {
             console.log('Success', res);
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ...
          });
    }

    render(){
        return(
            <div className="auth-container">
                <div className="authCard">
                    <p className="authTitle">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} />
                    <input className="input" id="password" placeholder="Password " type="password" onChange={this.handleRegister}/>
                    <button className="btn" onClick={this.handleRegister}>Register</button>
                    {/* <button> Go To Dashboard</button> */}
                </div>
            </div>
        )
    }
}

export default Register; 