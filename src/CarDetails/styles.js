import styled from '@emotion/styled';

export default styled('div')`
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  min-height: 19rem;
  box-sizing: border-box;
  padding: 2rem;
  
  @media screen and (min-width: 300px) {
    top: -3rem;
    width: calc(100% - 2rem);
    
    .message {
      font-size: 1.2rem;
    }
    
    .message.error {
      color: #8B0000;
    }
    
    &.flex-center {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
  
  @media screen and (min-width: 482px) {
    width: calc(100% - 10rem);
      
    .message {
      font-size: 1.7rem;
    }
  }
  
  @media screen and (min-width: 780px) {
    top: -2rem;
    max-width: 37rem; 
  }

  .info-item {
    margin-bottom: 2rem;
    
    &:last-child {
      margin-bottom: 0;    
    }
  }
  
  .label {
    font-size: 1.2rem;
    font-weight: 200;
  }
  
  .value {
    font-size: 1.8rem;
    font-weight: 300;
  }
`;
