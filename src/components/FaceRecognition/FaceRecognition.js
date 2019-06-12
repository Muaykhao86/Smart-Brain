import React from 'react';
import './FaceRecognition.css'

const  FaceRecognition = ({validUrl, imageUrl, boxes}) =>{
    return(
        <div className='center ma'>            
            <div className='absolute mt2'>
                {
                    !validUrl ? <h1 className='f2 red'>Please use a valid URL!</h1> : 
                 <img id='imageInput' alt=''  src={imageUrl} width= '500px' height='auto' />
                }
                {/* bounding-box copied from clarifai*/}
                {/* <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div> */}
                { 
          boxes.map(box => {
          return ( 
              validUrl ?
          <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
              <div className="smile"></div>
              <div className="eye-1"></div>
              <div className="eye-2"></div>
          </div> : null
          )
        })
        }
            </div>
        </div>

    );
}





export default FaceRecognition;