import { SearchPlateWrap } from './SearchPlate.styles';
import { useRef, useState } from 'react';
import { ObserverService } from '../services/Observer.service';



export const SearchPlate = () => {
  const searchInput = useRef();
  const [showValidation, setShowValidation] = useState(null);
  const onButtonClick = () => {
    if(searchInput?.current?.value?.length > 11) {
      setShowValidation(true);
      return;
    }
    setShowValidation(false);
    ObserverService.emitSearchPlate(searchInput?.current?.value);
  };

  return (
    <SearchPlateWrap>
      <div className="input-and-button">
        <input ref={searchInput} className="search-input" placeholder="License nr."/>
        <button className="send-button" onClick={onButtonClick}>Send</button>
      </div>
      {showValidation ? <div className="validation">License number has incorrect format</div> : ''}
    </SearchPlateWrap>
  );
};
