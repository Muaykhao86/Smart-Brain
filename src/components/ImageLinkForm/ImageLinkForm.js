import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) =>{
    return(
        <div className=''>
            <p className='f3'>
                {'This magic brain will detect faces in your pictures. Give it a try!'}
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