import { MainPageWrap } from './MainPage.styles';
import { SearchPlate } from '../search-plate/SearchPlate';
import { CarDetails } from '../car-details/CarDetails';
import { RandomImages } from '../random-images/RandomImages';

export const MainPage = () => {
  return (
    <MainPageWrap>
      <div className="background-section">
        <p className="header">Please enter your license plate number</p>
        <SearchPlate/>
      </div>
      <CarDetails/>
      <div className="images"><RandomImages/></div>
    </MainPageWrap>
  )
}
