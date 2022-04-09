import styled from '@emotion/styled';

export const SearchPlateWrap = styled('div')`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  
  .input-and-button {
    display: flex;
    justify-content: center;  
  }
  
  .search-input {
    padding: 0.4em 0.2em 0.4em 0.6em;
    font-size: 1.5rem;
    border: none;
    border-radius: 3px 0 0 3px;
    background-color: #F7D781;
    font-weight: 600;
    width: 9rem;
    
    &:focus {
      outline: none;
    }
    
    &::placeholder {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  
  .send-button {
    box-sizing: content-box;
    border: none;
    font-size: 1.5rem;
    padding: 0rem 1.2rem 0rem 1.2rem;
    border-radius: 0 3px 3px 0; 
    
    :hover {
      cursor: pointer;
    }
    
    :active {
      transform: scale(0.9);    
    }
  }
  
  .validation {
    margin-top: 1rem;
    color: #8B0000;
    background-color: #F7F7F7;
    padding: 0.4rem;
    border-radius: 7px;
    font-size: 0.8rem;
  }
`;
