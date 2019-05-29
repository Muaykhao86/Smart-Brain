import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) =>{
    return(
        <div className=''>
            <p className='f3'>
            {"Can't find a photo where everyone looks good? This app will make sure everyone's smile is perfect!"}
            </p>
            <div className='center'>
            <div className='form center pa4 shadow-5 br3'>
                <input 
                    type='text' 
                    className='f4 pa2 center w-70'
                    onChange={onInputChange} />
                <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                    onClick={onPictureSubmit} >Detect</button>
            </div>
            </div>
        </div>

    );
}





export default ImageLinkForm;