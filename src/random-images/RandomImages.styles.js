import styled from '@emotion/styled';


export const RandomImagesWrap = styled('div')`
  min-height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;  

  .carousel-wrap {
    position: relative;
  }
  
  .swiper-slide {
    text-align: center;
  }
  
  @media screen and (min-width: 300px) {
    .swiper {
       position: relative;
       z-index: -1;
       width: 240px;
    }
    
    .nav-button {
      position: absolute;
      z-index: 1;
      cursor: pointer;
      top: calc(50% - 20px);
      
      &.swiper-button-disabled {
        opacity: 0.5;
        cursor: default;
      }
    }
      
    .prev-slide {
      left: -2.2rem;
    }
    
    .next-slide {
      right: -2.1rem;
    }
  
    .swiper-slide img {
      width: 100%;
      height: auto;    
    }
  }
  
  @media screen and (min-width: 600px) {
    .swiper {
      width: 580px;
      margin-bottom: 2rem;    
    }
    
    .nav-button {
      top: auto;
      bottom: -1em;
    }
    
    .prev-slide {
      left: 0;
    }
    
    .next-slide {
      right: 0;
    }
    
    
  }
  
  @media screen and (min-width: 1200px) {
    .swiper {
      width: 1050px;
    }
    
    .nav-button {
      bottom: auto;
      top: calc(50% - 33px);
    }
    
    .prev-slide {
      left: -3rem;
    }
    
    .next-slide {
      right: -3rem;
    }
  }
`;
