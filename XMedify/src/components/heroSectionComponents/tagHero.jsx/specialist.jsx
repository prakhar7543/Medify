import React from "react";
import Swiper from 'swiper';
import './specialist.css';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import doctorHena from '../../../assets/doctorHena.png'
import drAhmad from '../../../assets/drAhmad.png'
import drAnkur from '../../../assets/drAnkur.png'
import drStevens from '../../../assets/drStevens.jpg'
import drLesley from '../../../assets/drLesley.jpg'


export default function Specialist() {
  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });

  return (
    <div className="swiper">
      <div className="swiper-wrapper" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="swiper-slide" style={{width: '370px', height: '500px'}}>
    <img src={doctorHena} alt="pic" style={{width: '100%', height: '415px'}}/>
        </div>
        <div className="swiper-slide" style={{width: '370px', height: '500px'}}>
    <img src={drAhmad} alt="pic" style={{width: '100%', height: '415px'}}/>
        </div>
        <div className="swiper-slide" style={{width: '370px', height: '500px'}}>
    <img src={drAnkur} alt="pic" style={{width: '100%', height: '415px'}}/>
        </div>
        {/* <div className="swiper-slide" style={{width: '370px', height: '500px'}}>
    <img src={drStevens} alt="pic" style={{width: '100%', height: '415px'}}/>
        </div>
        <div className="swiper-slide" style={{width: '370px', height: '500px'}}>
    <img src={drLesley} alt="pic" style={{width: '100%', height: '415px'}}/> */}
        {/* </div> */}
      </div>
        
      {/* <div className="swiper-pagination"></div> */}
      {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}
    </div>
  );
}