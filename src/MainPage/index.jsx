import CarDetails from "../CarDetails";
import Styled from "./styles";
import RandomImages from "../RandomImages";
import SearchPlate from "../SearchPlate";

function MainPage() {
  return (
    <Styled>
      <div className="background-section">
        <p className="header">Please enter your license plate number</p>
        <SearchPlate/>
      </div>
      <CarDetails/>
      <div className="images"><RandomImages/></div>
    </Styled>
  )
}

export default MainPage;