import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    // if statement rather than turnary just for kicks
    if (isSignedIn === true){
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}} > {/*  <- Trick to use styling in jsx*/}
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign out</p>
            </nav>
        );
    }else{
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}} > {/*  <- Trick to use styling in jsx*/}
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>        
            </nav>
        );    

    }
}
export default Navigation;

