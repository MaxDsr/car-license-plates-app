// Mock datasets matching the Dutch vehicle API structure
// Each dataset contains: merk, handelsbenaming, datum_eerste_toelating, brandstof

const mockDatasets = [
  {
    merk: "Volkswagen",
    handelsbenaming: "Golf R",
    datum_eerste_toelating: "20180315",
    brandstof: [{
      brandstof_omschrijving: "Benzine"
    }]
  },
  {
    merk: "BMW",
    handelsbenaming: "330i",
    datum_eerste_toelating: "20190622",
    brandstof: [{
      brandstof_omschrijving: "Benzine"
    }]
  },
  {
    merk: "Mercedes-Benz",
    handelsbenaming: "C 220 d",
    datum_eerste_toelating: "20200108",
    brandstof: [{
      brandstof_omschrijving: "Diesel"
    }]
  },
  {
    merk: "Toyota",
    handelsbenaming: "Prius",
    datum_eerste_toelating: "20210503",
    brandstof: [{
      brandstof_omschrijving: "Hybride"
    }]
  },
  {
    merk: "Audi",
    handelsbenaming: "e-tron",
    datum_eerste_toelating: "20220914",
    brandstof: [{
      brandstof_omschrijving: "Elektrisch"
    }]
  },
  {
    merk: "Tesla",
    handelsbenaming: "Model 3",
    datum_eerste_toelating: "20211127",
    brandstof: [{
      brandstof_omschrijving: "Elektrisch"
    }]
  },
  {
    merk: "Ford",
    handelsbenaming: "Focus ST",
    datum_eerste_toelating: "20170420",
    brandstof: [{
      brandstof_omschrijving: "Benzine"
    }]
  },
  {
    merk: "Renault",
    handelsbenaming: "Clio",
    datum_eerste_toelating: "20190305",
    brandstof: [{
      brandstof_omschrijving: "LPG"
    }]
  },
  {
    merk: "Peugeot",
    handelsbenaming: "308 BlueHDi",
    datum_eerste_toelating: "20200711",
    brandstof: [{
      brandstof_omschrijving: "Diesel"
    }]
  },
  {
    merk: "Volvo",
    handelsbenaming: "XC90 T8",
    datum_eerste_toelating: "20230202",
    brandstof: [{
      brandstof_omschrijving: "Hybride"
    }]
  }
];

// Function to get a random dataset
function getRandomDataset() {
  const randomIndex = Math.floor(Math.random() * mockDatasets.length);
  return mockDatasets[randomIndex];
}

module.exports = {
  mockDatasets,
  getRandomDataset
};

