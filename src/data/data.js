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
  return city.region === 'asia' ? true : false 
})

const asiaCountries = countryList.filter( country => {
  return country.region === 'asia' ? true : false
})

// africa
const africaCities = topCities.filter( city => {
  return city.region === 'africa' ? true : false
})

const africaCountries = countryList.filter( country => {
  return country.region === 'africa' ? true : false
})

// middleEast
const middleEastCities = topCities.filter( city => {
  return city.region === 'middleEast' ? true : false
})

const middleEastCountries = countryList.filter( country => {
  return country.region === 'middleEast' ? true : false
})

// europe
const europeCities = topCities.filter( city => {
  return city.region === 'europe' ? true : false
})

const europeCountries = countryList.filter( country => {
  return country.region === 'europe' ? true : false
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

