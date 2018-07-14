import React from 'react';
import {
    Form,
    Fieldset,
    EmailField,
    PasswordField,
    RegisterButton,
    NameField
    } from '../FormComponents/FormComponents';


class Register extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:'',
            email:''
        }}
    
        onNameChange= (event) => {
            this.setState({name: event.target.value})
        }
        onPasswordChange= (event) => {
            this.setState({password: event.target.value})
        }
        onEmailChange= (event) => {
            this.setState({email: event.target.value})
        }
        onRegisterNewUser = () => {
            fetch('https://elegant-madame-25921.herokuapp.com/register', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: this.state.name,
                        email: this.state.email, 
                        password: this.state.password
                    })
                }) 
                .then(res => res.json())
                .then(user => {
                    if(user.id){
                        this.props.loadUser(user);
                        this.props.onRouteChange('home');  
                    }
                })
            }

    render(){
        return(
        <Form>
        <Fieldset>
            <legend className = "f3 fw6 ph0 mh0">Register</legend>
            <NameField  onNameChange = {this.onNameChange} />
            <EmailField onEmailChange = {this.onEmailChange} />
            <PasswordField onPasswordChange = {this.onPasswordChange} />
        </Fieldset>
            <RegisterButton onRegisterNewUser = {this.onRegisterNewUser} />
        </Form>
        )
    }
}


export default Register;
