import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { ObserverService } from '../services/Observer';
import ChevronArrow from "../ChevronArrow";
import Styled from "./styles";
import Spinner from "../Spinner";
import {BREAKPOINTS_CONFIG} from "./consts";
import {getRandomImages} from "./helpers";

let subscription;

function RandomImages() {
  const [imagesInProgress, setImagesInProgress] = useState(true);
  const [slidersData, setSlidersData] = useState(null);
  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();

  useEffect(() => {
    getRandomImages(setImagesInProgress, setSlidersData);
    subscription = ObserverService.subscribeImagesUpdate(() => {
      getRandomImages(setImagesInProgress, setSlidersData);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Styled>
      {(imagesInProgress && !slidersData?.length)
        ? <div className="spinner-wrap"><Spinner/></div>
        : <div className="carousel-wrap">
          <div className="nav-button prev-slide" ref={navigationPrevRef}><ChevronArrow left={true}/></div>
          <div className="nav-button next-slide" ref={navigationNextRef}><ChevronArrow right={true}/></div>
            <Swiper
              modules={[Navigation, A11y]}
              breakpoints={BREAKPOINTS_CONFIG}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              centerInsufficientSlides={true}
            >
              {
                slidersData.map((data) =>
                  <SwiperSlide key={data.uniqueKey}><img src={data.image} alt="carousel"/></SwiperSlide>)
              }
            </Swiper>
          </div>
      }
    </Styled>
  );
}

export default RandomImages;
