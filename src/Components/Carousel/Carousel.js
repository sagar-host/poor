import React from 'react'
import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function carousel() {
  return (
    <Carousel className='caro' autoPlay>

    <iframe  allow="fullscreen" frameBorder="0" title="heal" width="100%" height='100%' controls className='media'
src="https://www.youtube.com/embed/0RQWv1ybsjM">
</iframe>
       <iframe  allow="fullscreen" frameBorder="0" width="100%" height='100%' controls className='media'
src="https://www.youtube.com/embed/9EaY11hAod8"  title="Tracker 22">
</iframe>
    <iframe  allow="fullscreen" frameBorder="0" title="heak" width="100%" height='100%' controls className='media'
src="https://www.youtube.com/embed/SVcsDDABEkM">
</iframe>
    
 
   
</Carousel>
  )
}

export default carousel
