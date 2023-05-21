import bgImage from '../assets/golf7R.jpeg';
import styled from '@emotion/styled';


export default styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .header {
    color: #fff;
    text-align: center;
    font-weight: 600;
  }
  
  .background-section {
    width: 100%;
    height: 25rem;
    background: url(${bgImage}) rgba(0, 0, 0, 0.5) center/cover no-repeat;
    background-blend-mode: multiply;
    position: relative;   
  }
  
  .images {
    margin-top: 2rem;
  }
  
  @media screen and (min-width: 300px) {
    .header {
      margin-top: 7rem;
      font-size: 1.5rem;
    }
  }
  
  @media screen and (min-width: 482px) {
    .header {
      font-size: 2rem;
    }
  }
  
  @media screen and (min-width: 600px) {
    .header {
      margin-top: 11%;
      font-size: 2.5rem;
    }
  }
`;
