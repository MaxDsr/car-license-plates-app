import {v4 as uniqueKey} from "uuid";

export function getCarDetails(apiData) {
  const tradeName = apiData.merk + ' ' + apiData.handelsbenaming;
  const date = apiData.datum_eerste_toelating;
  const fuelType = apiData.brandstof?.[0]?.brandstof_omschrijving;
  const labels = ['Trade name', 'Date of first admission', 'Fuel description'];
  const values = [tradeName, date, fuelType];
  console.log(values);
  return labels.reduce(
    (prev, curr, index) => ([...prev, { id: uniqueKey(), label: curr, value: values[index] }]),
    []);
}