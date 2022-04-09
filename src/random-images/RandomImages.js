import { Navigation, A11y } from 'swiper';
import { RandomImagesWrap } from './RandomImages.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { v4 as uniqueKey } from 'uuid';
import { ObserverService } from '../services/Observer.service';
import { Chevron } from '../chevron-arrow/Chevron';
import { Spinner } from '../spinner/Spinner';

let subscription;

export const RandomImages = () => {
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
    <RandomImagesWrap>
      {(imagesInProgress && !slidersData?.length)
        ? <div className="spinner-wrap"><Spinner/></div>
        : <div className="carousel-wrap">
          <div className="nav-button prev-slide" ref={navigationPrevRef}><Chevron left={true}/></div>
          <div className="nav-button next-slide" ref={navigationNextRef}><Chevron right={true}/></div>
            <Swiper
              modules={[Navigation, A11y]}
              breakpoints={breakPointsConfig}
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
    </RandomImagesWrap>
  );
};

function getRandomImages(setImagesInProgress, setSlidersData) {
  setImagesInProgress(true);
  const requests = [];
  for (let i = 0; i < 6; i++) {
    requests.push(axios.get('https://picsum.photos/300/200', { responseType: 'blob' }));
  }

  Promise.all(requests)
    .then((responses) => {
      const blobs = responses.map((response) => response.data);
      return blobs.map((item) => loadFileToDataURL(item));
    })
    .then((blobsLoading) => Promise.all(blobsLoading))
    .then((loadedImages) => {
      setSlidersData(loadedImages.map((image) => ({ uniqueKey: uniqueKey(), image: image })));
      setImagesInProgress(false);
    });
}

function loadFileToDataURL(file) {
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
}

const breakPointsConfig = {
  315: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  482: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  600: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 30
  },
};
