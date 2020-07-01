import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';


const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const{ user, signOut, signInWithGoogle} = this.props;
        return(
            <div>
                
                {
                    user 
                    ?<p  onClick={signOut}>Desconectarse</p>
                    :<p  onClick={signInWithGoogle}>Conectarse con Google</p>
                }
            
                {
                
                    user ? 
                    <p > Hola,{user.displayName}</p>
                    :<p> Sign In</p>
        
                }
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers ={
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
