import styled from '@emotion/styled';

const ChevronWrap = styled('i')`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 38px;
  height: 38px;
  border-radius: 100px;
  
  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 30px;
    height: 30px;
    border-bottom: 6px solid;
    border-right: 6px solid;
    right: 6px;
    top: 4px
  }
  
  &.right {
    transform: rotate(-45deg);
  }
  
  &.left {
    transform: rotate(135deg);
  }
`;

export default (props) => <ChevronWrap className={(props.right ? 'right': '') + (props.left ? 'left': '')}/>;
