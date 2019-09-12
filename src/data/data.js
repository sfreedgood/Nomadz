import topCities from "./top100Destinations"
import countryList from "./countryList"

// let alphabetical = topCities.sort(compare);
// const rankedOptions = rankInsertionSort( topCities )

// __data filters__
// americas
const americasCities = topCities.filter( city => {
  return city.region === 'Americas' ? true : false
})

const americasCountries = countryList.filter( country => {
  return country.region === 'Americas' ? true : false
})

// asia
const asiaCities = topCities.filter( city => {
  return city.region === 'Asia' ? true : false 
})

const asiaCountries = countryList.filter( country => {
  return country.region === 'Asia' ? true : false
})

// oceania
const oceaniaCities = topCities.filter( city => {
  return city.region === 'Oceania' ? true : false 
})

const oceaniaCountries = countryList.filter( country => {
  return country.region === 'Oceania' ? true : false
})

// africa
const africaCities = topCities.filter( city => {
  return city.region === 'Africa' ? true : false
})

const africaCountries = countryList.filter( country => {
  return country.region === 'Africa' ? true : false
})

// middleEast
const middleEastCities = topCities.filter( city => {
  return city.region === 'Middle East' ? true : false
})

const middleEastCountries = countryList.filter( country => {
  return country.region === 'Middle East' ? true : false
})

// europe
const europeCities = topCities.filter( city => {
  return city.region === 'Europe' ? true : false
})

const europeCountries = countryList.filter( country => {
  return country.region === 'Europe' ? true : false
})

// __data sets__
export const regionOptionsCity = [
  {
    label: 'Americas',
    options: americasCities
  },
  {
    label: 'Asia',
    options: asiaCities
  },
  {
    label: 'Oceania',
    options: oceaniaCities
  },
  {
    label: 'Middle East & Africa',
    options: middleEastCities.concat(africaCities)
  },
  {
    label: 'Europe',
    options: europeCities
  },
]

export const regionOptionsCountry = [
  {
    label: 'Americas',
    options: americasCountries
  },
  {
    label: 'Asia',
    options: asiaCountries
  },
  {
    label: 'Oceania',
    options: oceaniaCountries
  },
  {
    label: 'Middle East & Africa',
    options: middleEastCountries.concat(africaCountries)
  },
  {
    label: 'Europe',
    options: europeCountries
  },
]

// export default {
//   regionOptionsCity,
//   regionOptionsCountry
// }

