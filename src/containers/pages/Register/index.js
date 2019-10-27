import React, {Component} from 'react';
import './register.scss'
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component{
    state = {
        email: '', 
        password: ''
        // isLoading: false
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value, 
        })
    }

    handleRegisterSubmit = () => {
        const {email, password} = this.state;
        console.log('Data Before Send : ', email, password)
        // this.setState({
        //     isLoading: true
        // })
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false
        //     }) 
        // }, 4000)
        this.props.registerAPI({ email, password })
    }

    render(){
        return(
            <div className="auth-container">
                <div className="authCard">
                    <p className="authTitle">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} />
                    <input className="input" id="password" placeholder="Password " type="password" onChange={this.handleChangeText}/>
                    <Button onClick={this.handleRegisterSubmit} title="Daftar" loading={this.props.isLoading}/>
                </div>
            </div>
        )
    }
}

// export default Register;
const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})   


export default connect(reduxState, reduxDispatch)(Register); 