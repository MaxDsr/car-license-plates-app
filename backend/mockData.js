// Mock datasets matching the Dutch vehicle API structure
// Each dataset contains: merk, handelsbenaming, datum_eerste_toelating, brandstof

const mockDatasets = [
  {
    merk: "Volkswagen",
    handelsbenaming: "Golf R",
    datum_eerste_toelating: "15-03-2018",
    brandstof: [{
      brandstof_omschrijving: "Benzine"
    }]
  },
  {
    merk: "BMW",
    handelsbenaming: "330i",
    datum_eerste_toelating: "22-06-2019",
    brandstof: [{
      brandstof_omschrijving: "Benzine"
    }]
  },
  {
    merk: "Mercedes-Benz",
    handelsbenaming: "C 220 d",
    datum_eerste_toelating: "08-01-2020",
    brandstof: [{
      brandstof_omschrijving: "Diesel"
    }]
  },
  {
    merk: "Toyota",
    handelsbenaming: "Prius",
    datum_eerste_toelating: "03-05-2021",
    brandstof: [{
      brandstof_omschrijving: "Hybride"
    }]
  },
  {
    merk: "Audi",
    handelsbenaming: "e-tron",
    datum_eerste_toelating: "14-09-2022",
    brandstof: [{
      brandstof_omschrijving: "Elektrisch"
    }]
  },
  {
    merk: "Tesla",
    handelsbenaming: "Model 3",
    datum_eerste_toelating: "27-11-2021",
    brandstof: [{
      brandstof_omschrijving: "Elektrisch"
    }]
  },
  {
    merk: "Ford",
    handelsbenaming: "Focus ST",
    datum_eerste_toelating: "20-04-2017",
    brandstof: [{
      brandstof_omschrijving: "Benzine"
    }]
  },
  {
    merk: "Renault",
    handelsbenaming: "Clio",
    datum_eerste_toelating: "05-03-2019",
    brandstof: [{
      brandstof_omschrijving: "LPG"
    }]
  },
  {
    merk: "Peugeot",
    handelsbenaming: "308 BlueHDi",
    datum_eerste_toelating: "11-07-2020",
    brandstof: [{
      brandstof_omschrijving: "Diesel"
    }]
  },
  {
    merk: "Volvo",
    handelsbenaming: "XC90 T8",
    datum_eerste_toelating: "02-02-2023",
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

