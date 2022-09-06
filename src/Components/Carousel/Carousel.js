import React from 'react'
import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function carousel() {
  return (
    <Carousel className='caro' autoPlay>

    <iframe title="heal" width="100%" height='100%' controls className='media'
src="https://www.youtube.com/embed/0RQWv1ybsjM">
</iframe>
    <video width="90%"  className="media">
      <source src="https://res.cloudinary.com/dcjgktaob/video/upload/v1662501637/ved4_ckfi2m.mp4" />
      Your browser does not support the video tag.
    </video>
    <iframe title="heak" width="100%" height='100%' controls className='media'
src="https://www.youtube.com/embed/SVcsDDABEkM">
</iframe>
    
 
   
</Carousel>
  )
}

export default carousel
