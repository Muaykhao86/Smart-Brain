import React from 'react';
import {
    Form,
    Fieldset,
    EmailField,
    PasswordField,
    SignInButton,
    RegisterLink} from '../FormComponents/FormComponents';

 
class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange= (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    
    onSubmitSignIn = () => {
   
        fetch('https://elegant-madame-25921.herokuapp.com/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        email: this.state.signInEmail, 
        password: this.state.signInPassword
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
    // this is now a smart component that recieves state hence this.props as it recieves and passes 
    // props from the parent component/ onRouteChange ={this.onRouteChange}
    // dumb components do not need this.props
        const {onRouteChange} = this.props
        return (
            <Form>
            <Fieldset>
                <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                <EmailField onEmailChange ={this.onEmailChange} />
                <PasswordField onPasswordChange={this.onPasswordChange} />
            </Fieldset>
                <SignInButton onSubmitSignIn = {this.onSubmitSignIn} />                           
                <RegisterLink onRouteChange = {onRouteChange} />
                             
            </Form>
        )

    }
    
}

export default SignIn;
