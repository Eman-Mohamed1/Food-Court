// import React, { useEffect,useState } from 'react';  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../useFetch";
import {Link} from "react-router-dom";

const  NewArrivals = () => {


  const { error, isPending, data: samples } = useFetch('http://localhost:3001/Food')
     //  console.log(samples)

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              autoplay:true
            }
          },
          {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
            autoplay:true
          }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              autoplay:true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     
      return (
         <div> 
          <Slider {...settings}>
              { isPending && <div>Loading...</div> }
              { error && <div>{ error }</div> }
              { samples && samples.map(Food =>(

                    <Link to ="/Dashboard"><div><img src= {Food.poster} alt={Food.title}/></div> </Link>

                ))}
          </Slider>
        </div>
      );
    }
    
    export default NewArrivals;