import React,{ Component } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
// import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//     apiKey: 'f8978a054ffe4decacee5664698ef9bf'
//    })

// Had to put everything in a wrapper so the particles didnt render on every input

// Below - to clear the state every time the user signs out and avoid the last user info appering on new login
const initialState = {
    input:'',
          imageUrl:'',
          boxes:[],
          route: 'signin',
          isSignedIn: false,
          validUrl: true,
          user:{
                id:'',
                name:'',
                email:'',
                entries: 0,
                joined: ''
          }
}

class ComWrapper extends Component {
    constructor() {
        super()
        this.state = initialState;
        }

        loadUser = (data) => {
            this.setState({user:{
                id:data.id,
                name:data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined
            }})

        }

        // // Life hook cycle from react
        // componentDidMount(){
        //     fetch('http://localhost:3000')
        //     .then(response => response.json())
        // // Short hand for .then(data => console.log(data)) 
        //     .then(console.log);
        // }
        
        calculateFaceLocation = (data) => {
            return data.outputs[0].data.regions.map(face => {
            const clarifaiFace = face.region_info.bounding_box;
            const image = document.getElementById('imageInput');
            const width = Number(image.width);
            const height = Number(image.height);
            // Im returning a object {} not a expression
            return{
                // Below - Im multiplying the return left_col (which is a percentage of the image)
                // that i get back that is a % of the image where it thinks a face is
                // then I multiply it by the total width of the image to get the lhs of the face
                leftCol: clarifaiFace.left_col * width,
                topRow: clarifaiFace.top_row * height,
                rightCol: width - (clarifaiFace.right_col * width),
                bottomRow: height -(clarifaiFace.bottom_row * height)
                // Above - Im taking the total % minus the width of the lhs and the same for the height
                // This way i get a grid and a pin point of where the face is from this = (x,y) (x,y)
            }
        }
    )}

        displayFaceBoxes = (boxes) => {
            // or just ({boxes}) from es6
            this.setState({boxes: boxes});
        }
    
        onInputChange = (event) => {
            this.setState({input:event.target.value});
          }
        
        onPictureSubmit = () => {
            this.setState({imageUrl:this.state.input, validUrl: true}, () => this.ApiCall());}
        // Advanced!!! This is to make a call back so the imageUrl has time to update before the api call 
        // see https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
        // https://reactjs.org/docs/react-component.html#setstate
        // https://medium.com/@voonminghann/when-to-use-callback-function-of-setstate-in-react-37fff67e5a6c
        ApiCall = () => {    
        // Below- has been sent to the back end to hide key
        // app.models.predict(
        // Clarifai.FACE_DETECT_MODEL, 
        // this.state.input)
            fetch('https://elegant-madame-25921.herokuapp.com/imageurl', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        input: this.state.input
                    })
            })
            .then(response => response.json())
                .then(response => {
                    if(response) {
                // fetching a put request to our server and sending it the id in the body to get back our entry count
                        fetch('https://elegant-madame-25921.herokuapp.com/image', {
                            method: 'put',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({
                            id: this.state.user.id
                            })
                        })
                        .then(res => res.json())
                        .then(count => {
                            // Using Object.assign so that the state of user isnt reset every time just the target 
                            // which is entry--(Object.assign(target, ...sources))
                            this.setState(Object.assign(this.state.user, {entries: count}))
                        })
                        .catch(console.log)
                    }
                    this.displayFaceBoxes(this.calculateFaceLocation(response))
                })
                    .catch(err => {
                        this.setState({validUrl: false});
                        console.log(err);
                    });
            }
            
        onRouteChange = (route) => {
            if(route === 'home'){
                this.setState({isSignedIn: true})
            }else if (route === 'signout'){
                this.setState(initialState)
            }
         this.setState({route: route})
        }  
        
          
    render() {
        return(
            <div>
                <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
{/* Cant write a if statement in a return statement but jsx allows us to write js expressions in {} */}
{/* So can write if this.state.signIn is true then return the SignIn component, if not return the logo component etc */}
{/* NOTE- As im returning more than one element it has to be in a div */}
                { this.state.route === 'home' ?
                    <div>
                        <Logo /> 
                        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                        <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />         
                        <FaceRecognition validUrl={this.state.validUrl} boxes={this.state.boxes} imageUrl={this.state.imageUrl} />
                    </div> 
                    :
                    (this.state.route ==='signin'||this.state.route === 'signout' ?
                    <SignIn loadUser ={this.loadUser} onRouteChange = {this.onRouteChange}/>
                    :
                    <Register loadUser= {this.loadUser} onRouteChange = {this.onRouteChange}/>)
                }
            </div>
        );
    }
}
    
export default ComWrapper;
