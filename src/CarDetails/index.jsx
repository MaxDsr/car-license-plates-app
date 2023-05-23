import { useEffect, useState } from 'react';
import { ObserverService } from '../services/Observer';
import axios from 'axios';
import Styled from "./styles";
import Spinner from "../Spinner";
import {getCarDetails} from "./helpers";

let subscription;

function CarDetails() {
  const [contentInProgress, setContentInProgress] = useState(false);
  const [noData, setNoData] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [viewData, setViewData] = useState(null);

  useEffect(() => {
    subscription = ObserverService.subscribeSearchPlate((licenseNumber) => {
      setContentInProgress(true);
      axios.get(`https://api.overheid.io/voertuiggegevens/${licenseNumber}?ovio-api-key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
          setViewData(() => getCarDetails(response.data));
          setErrorMessage(false);
          ObserverService.emitImagesUpdate();
        })
        .catch((error) => {
          setErrorMessage(error.response?.data?.error);
          setViewData(false);
        })
        .finally(() => {
          setContentInProgress(false);
          setNoData(false);
        });
    });
    return () => subscription.unsubscribe();
  }, []);


  const getCarDataView = () => {
    return viewData.map((item) =>
      <div className="info-item" key={item.id}>
        <div className="label">{item.label}</div>
        <div className="value">{item.value}</div>
      </div>)
  };

  return(
    <Styled className={contentInProgress || errorMessage || noData ? 'flex-center' : ''}>
      {!contentInProgress && viewData?.length ? getCarDataView() : ''}
      {!contentInProgress && noData ? <div className="message">No data yet.</div> : '' }
      {!contentInProgress && errorMessage ? <div className="message error">{errorMessage}</div> : ''}
      {contentInProgress ? <Spinner/> : ''}
    </Styled>
  );
}

export default CarDetails;
