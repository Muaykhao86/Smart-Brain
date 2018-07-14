import React from 'react';

export const Form = (props) => {
    return(    
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5  center">
            <main className="pa4 black-80">
                <div className=" measure ">
                {props.children}   
                {/*  props.children  is used to display whatever you 
                include between the opening and closing tags when invoking a component.*/}
                </div>
            </main>
        </article>
    )
}

export const Fieldset = (props) => {
    return(
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        {props.children}                    
        </fieldset>
    )
}

export const NameField = ({onNameChange}) => {                               
    return(
        <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input 
                onChange={onNameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="name"  
                id="name" />
        </div>
    )
}
                                
export const EmailField = ({onEmailChange}) => {
    return(
        <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input 
                onChange={onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" />
        </div>
    )
}    

export const PasswordField = ({onPasswordChange}) => {   
    return(                              
        <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input 
            onChange={onPasswordChange}
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="password" 
            name="password"  
            id="password" />
        </div>            
    )
}

export const RegisterButton = ({onRegisterNewUser}) => {
    return (
    <div className="">
        <input 
        onClick= {onRegisterNewUser} 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Register" />
    </div>
    )
}
                        
export const SignInButton = ({onSubmitSignIn}) => {
    return(
        <div className="">
            <input 
            onClick= {onSubmitSignIn} 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in" />
        </div>
    )
}

export const RegisterLink = ({onRouteChange}) => {
    return(
        <div className="lh-copy mt3">
            <p 
            onClick= {() => onRouteChange('register')} 
            className="f6 link dim black db pointer">Register
            </p>            
        </div>
    )
}

