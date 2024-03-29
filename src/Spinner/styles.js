import styled from "@emotion/styled";

export default styled('div')`
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid #000;
    opacity: 1;
    border-radius: 50%;
    animation: spinner 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  
  div:nth-of-type(2) {
    animation-delay: -0.5s;
  }
  
  @keyframes spinner {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;