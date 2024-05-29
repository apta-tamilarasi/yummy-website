import React from 'react'

import Slider from "react-slick";

import './Gallery.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import g1 from '../../image/events-1.jpg'
import g2 from '../../image/events-2.jpg'
import g3 from '../../image/events-3.jpg'

const Gallery=()=>{

    let image=[g1,g2,g3,g2,g3,g1,g3,g1,g2]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay:true,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1
            }
          }
        ]
      }



    return <section >
        <div className='Gallerycon'>

       

<Slider {...settings}>
         
         {
            image.map((e,i)=>{
                return <div key={i} className='galleryimg'>
                    <img src={e} alt='loading' />

                </div>
            })
         }
        </Slider>
        </div>

    </section>
}

export  default Gallery