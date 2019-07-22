let topCities = [
  {
    label: "Hong Kong",
    value: "HK",
    city: "Hong Kong",
    country: "Hong Kong",
    countryCode: "HK"
  },
  {
    label: "Singapore",
    value: "SG",
    city: "Singapore",
    country: "Singapore",
    countryCode: "SG"
  },
  {
    label: "Bangkok",
    value: "TH",
    city: "Bangkok",
    country: "Thailand",
    countryCode: "TH"
  },
  {
    label: "London",
    value: "UK",
    city: "London",
    country: "United Kingdom",
    countryCode: "UK"
  },
  {
    label: "Macau",
    value: "MO",
    city: "Macau",
    country: "Macau",
    countryCode: "MO"
  },
  {
    label: "Kuala Lumpur",
    value: "MY",
    city: "Kuala Lumpur",
    country: "Malaysia",
    countryCode: "MY"
  },
  {
    label: "Shenzhen",
    value: "CN",
    city: "Shenzhen",
    country: "China",
    countryCode: "CN"
  },
  {
    label: "New York City",
    value: "US",
    city: "New York City",
    country: "USA",
    countryCode: "US"
  },
  {
    label: "Antalya",
    value: "TR",
    city: "Antalya",
    country: "Turkey",
    countryCode: "TR"
  },
  {
    label: "Paris",
    value: "FR",
    city: "Paris",
    country: "France",
    countryCode: "FR"
  },
  {
    label: "Istanbul",
    value: "TR",
    city: "Istanbul",
    country: "Turkey",
    countryCode: "TR"
  },
  {
    label: "Rome",
    value: "IT",
    city: "Rome",
    country: "Italy",
    countryCode: "IT"
  },
  {
    label: "Dubai",
    value: "AE",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE"
  },
  {
    label: "Guangzhou",
    value: "CN",
    city: "Guangzhou",
    country: "China",
    countryCode: "CN"
  },
  {
    label: "Phuket",
    value: "TH",
    city: "Phuket",
    country: "Thailand",
    countryCode: "TH"
  },
  {
    label: "Mecca",
    value: "SA",
    city: "Mecca",
    country: "Saudi Arabia",
    countryCode: "SA"
  },
  {
    label: "Pattaya",
    value: "TH",
    city: "Pattaya",
    country: "Thailand",
    countryCode: "TH"
  },
  {
    label: "Taipei City",
    value: "TW",
    city: "Taipei City",
    country: "Taiwan",
    countryCode: "TW"
  },
  {
    label: "Prague",
    value: "CZ",
    city: "Prague",
    country: "Czech Republic",
    countryCode: "CZ"
  },
  {
    label: "Shanghai",
    value: "CN",
    city: "Shanghai",
    country: "China",
    countryCode: "CN"
  },
  {
    label: "Las Vegas",
    value: "US",
    city: "Las Vegas",
    country: "USA",
    countryCode: "US"
  },
  {
    label: "Miami",
    value: "US",
    city: "Miami",
    country: "USA",
    countryCode: "US"
  },
  {
    label: "Barcelona",
    value: "ES",
    city: "Barcelona",
    country: "Spain",
    countryCode: "ES"
  },
  {
    label: "Moscow",
    value: "RU",
    city: "Moscow",
    country: "Russia",
    countryCode: "RU"
  },
  {
    label: "Beijing",
    value: "CN",
    city: "Beijing",
    country: "China",
    countryCode: "CN"
  },
  {
    label: "Los Angeles",
    value: "US",
    city: "Los Angeles",
    country: "USA",
    countryCode: "US"
  },
  {
    label: "Budapest",
    value: "HU",
    city: "Budapest",
    country: "Hungary",
    countryCode: "HU"
  },
  {
    label: "Vienna",
    value: "AT",
    city: "Vienna",
    country: "Austria",
    countryCode: "AT"
  },
  {
    label: "Amsterdam",
    value: "NL",
    city: "Amsterdam",
    country: "Netherlands",
    countryCode: "NL"
  },
  {
    label: "Sofia",
    value: "BG",
    city: "Sofia",
    country: "Bulgaria",
    countryCode: "BG"
  },
  {
    label: "Madrid",
    value: "ES",
    city: "Madrid",
    country: "Spain",
    countryCode: "ES"
  },
  {
    label: "Orlando",
    value: "US",
    city: "Orlando",
    country: "USA",
    countryCode: "US"
  },
  {
    label: "Ho Chi Minh City",
    value: "VN",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    countryCode: "VN"
},
  {
    label: "Lima",
    value: "PE",
    city: "Lima",
    country: "Peru",
    countryCode: "PE"
  },
  {
    label: "Berlin",
    value: "DE",
    city: "Berlin",
    country: "Germany",
    countryCode: "DE"
  },
  {
    label: "Tokyo",
    value: "JP",
    city: "Tokyo",
    country: "Japan",
    countryCode: "JP"
  },
  {
    label: "Warsaw",
    value: "PL",
    city: "Warsaw",
    country: "Poland",
    countryCode: "PL"
  },
  {
    label: "Chennai",
    value: "IN",
    city: "Chennai",
    country: "India",
    countryCode: "IN"
  },
  {
    label: "Cairo",
    value: "EG",
    city: "Cairo",
    country: "Egypt",
    countryCode: "EG"
  },
  {
    label: "Nairobi",
    value: "KE",
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE"
  },
  {
    label: "Hangzhou",
    value: "CN",
    city: "Hangzhou",
    country: "China",
    countryCode: "CN"
  },
  {
    label: "Milan",
    value: "IT",
    city: "Milan",
    country: "Italy",
    countryCode: "IT"
  },
  {
    label: "San Francisco",
    value: "US",
    city: "San Francisco",
    country: "USA",
    countryCode: "US"
  },
  {
    label: "Buenos Aires",
    value: "AR",
    city: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR"
  },
  {
    label: "Venice",
    value: "IT",
    city: "Venice",
    country: "Italy",
    countryCode: "IT"
  },
  {
    label: "Mexico City" ,
    value: "MX",
    city: "Mexico City" ,
    country: "Mexico",
    countryCode: "MX"
  },
  {
    label: "Dublin",
    value: "IE",
    city: "Dublin",
    country: "Ireland",
    countryCode: "IE"
  },
  {
    label: "Seoul",
    value: "KR",
    city: "Seoul",
    country: "South Korea",
    countryCode: "KR"
  },
  {
    label: "Mugla",
    value: "TR",
    city: "Mugla",
    country: "Turkey",
    countryCode: "TR"
  },
  {
    label: "Mumbai",
    value: "IN",
    city: "Mumbai",
    country: "India",
    countryCode: "IN"
  },
  {
    label: "Denpasar",
    value: "ID",
    city: "Denpasar",
    country: "Indonesia",
    countryCode: "ID"
  },
  {
    label: "Delhi",
    value: "IN",
    city: "Delhi",
    country: "India",
    countryCode: "IN"
  },
  {
    label: "Toronto",
    value: "CA",
    city: "Toronto",
    country: "Canada",
    countryCode: "CA"
  },
  {
    label: "Zhuhai",
    value: "CN",
    city: "Zhuhai",
    country: "China",
    countryCode: "CN"
  },
  {
    label: "St Petersburg",
    value: "RU",
    city: "St Petersburg",
    country: "Russia",
    countryCode: "RU"
  },
  {
    label: "Burgas",
    value: "BG",
    city: "Burgas",
    country: "Bulgaria",
    countryCode: "BG"
  },
  {
    label: "Sydney",
    value: "AU",
    city: "Sydney",
    country: "Australia",
    countryCode: "AU"
  },
  {
    label: "Djerba",
    value: "TN",
    city: "Djerba",
    country: "Tunisia",
    countryCode: "TN"
  },
  {
    label: "Munich",
    value: "DE",
    city: "Munich",
    country: "Germany",
    countryCode: "DE"
  },
  {
    label: "Johannesburg",
    value: "ZA",
    city: "Johannesburg",
    country: "South Africa",
    countryCode: "ZA"
  },
  {
    label: "Cancun",
    value: "MX",
    city: "Cancun",
    country: "Mexico",
    countryCode: "MX"
  },
  {
    label: "Edirne",
    value: "TR",
    city: "Edirne",
    country: "Turkey",
    countryCode: "TR"
  },
  {
    label: "Suzhou",
    value: "CN",
    city: "Suzhou",
    country: "China",
    countryCode: "CN"
  },
  {
    label: "Bucharest",
    value: "RO",
    city: "Bucharest",
    country: "Romania",
    countryCode: "RO"
  },
  {
    label: "Punta Cana",
    value: "DR",
    city: "Punta Cana",
    country: "Dominican Republic",
    countryCode: "DR"
  },
  {
    label: "Agra",
    value: "IN",
    city: "Agra",
    country: "India",
    countryCode: "IN"
  },
  {
    label: "Jaipur",
    value: "IN",
    city: "Jaipur",
    country: "India",
    countryCode: "IN"
  },
  {
    label: "Brussels",
    value: "BE",
    city: "Brussels",
    country: "Belgium",
    countryCode: "BE"
  },
  {
    label: "Nice",
    value: "FR",
    city: "Nice",
    country: "France",
    countryCode: "FR"
  },
  {
    label: "Chiang Mai",
    value: "TH",
    city: "Chiang Mai",
    country: "Thailand",
    countryCode: "TH"
  },
  {
    label: "Sharm el-Sheikh",
    value: "EG",
    city: "Sharm el-Sheikh",
    country: "Egypt",
    countryCode: "EG"
  },
  {
    label: "Lisbon",
    value: "PT",
    city: "Lisbon",
    country: "Portugal",
    countryCode: "PT"
  },
  {
    label: "East Province",
    value: "SA",
    city: "East Province",
    country: "Saudi Arabia",
    countryCode: "SA"
  },
  {
    label: "Marrakech",
    value: "MA",
    city: "Marrakech",
    country: "Morocco",
    countryCode: "MA"
  },
  {
    label: "Jakarta",
    value: "ID",
    city: "Jakarta",
    country: "Indonesia",
    countryCode: "ID"
  },
  {
    label: "Manama",
    value: "BH",
    city: "Manama",
    country: "Bahrain",
    countryCode: "BH"
  },
  {
    label: "Hanoi",
    value: "VN",
    city: "Hanoi",
    country: "Vietnam",
    countryCode: "VN"
  },
  {
    label: "Honolulu",
    value: "US",
    city: "Honolulu",
    country: "USA",
    countryCode: "US"
  },
  {
    label: "Manila",
    value: "PH",
    city: "Manila",
    country: "Philippines",
    countryCode: "PH"
  },
  {
    label: "Guilin",
    value: "CN",
    city: "Guilin",
    country: "China",
    countryCode: "CN"
  },
  {
    label: "Auckland",
    value: "NZ",
    city: "Auckland",
    country: "New Zealand",
    countryCode: "NZ"
  },
  {
    label: "Siem Reap",
    value: "KH",
    city: "Siem Reap",
    country: "Cambodia",
    countryCode: "KH"
  },
  {
    label: "Sousse",
    value: "TN",
    city: "Sousse",
    country: "Tunisia",
    countryCode: "TN"
  },
  {
    label: "Amman",
    value: "JO",
    city: "Amman",
    country: "Jordan",
    countryCode: "JO"
  },
  {
    label: "Vancouver",
    value: "CA",
    city: "Vancouver",
    country: "Canada",
    countryCode: "CA"
  },
  {
    label: "Abu Dhabi",
    value: "AE",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    countryCode: "AE"
  },
  {
    label: "Kiev",
    value: "UA",
    city: "Kiev",
    country: "Ukraine",
    countryCode: "UA"
  },
  {
    label: "Doha",
    value: "QR",
    city: "Doha",
    country: "Qatar",
    countryCode: "QR"
  },
  {
    label: "Florence",
    value: "IT",
    city: "Florence",
    country: "Italy",
    countryCode: "IT"
  },
  {
    label: "Rio de Janeiro",
    value: "BR",
    city: "Rio de Janeiro",
    country: "Brazil",
    countryCode: "BR"
  },
  {
    label: "Melbourne",
    value: "AU",
    city: "Melbourne",
    country: "Australia",
    countryCode: "AU"
  },
  {
    label: "Washington",
    value: "US",
    city: "Washington",
    country: "USA",
    countryCode: "US"
  },
  {
    label: "Riyadh",
    value: "SA",
    city: "Riyadh",
    country: "Saudi Arabia",
    countryCode: "SA"
  },
  {
    label: "Christchurch",
    value: "NZ",
    city: "Christchurch",
    country: "New Zealand",
    countryCode: "NZ"
  },
  {
    label: "Frankfurt",
    value: "DE",
    city: "Frankfurt",
    country: "Germany",
    countryCode: "DE"
  },
  {
    label: "Baku",
    value: "AZ",
    city: "Baku",
    country: "Azerbaijan",
    countryCode: "AZ"
  },
  {
    label: "Sao Paulo",
    value: "BR",
    city: "Sao Paulo",
    country: "Brazil",
    countryCode: "BR"
  },
  {
    label: "Harare",
    value: "ZW",
    city: "Harare",
    country: "Zimbabwe",
    countryCode: "ZW"
  },
  {
    label: "Kolkata",
    value: "IN",
    city: "Kolkata",
    country: "India",
    countryCode: "IN"
  },
  {
    label: "Nanjing",
    value: "CN",
    city: "Nanjing",
    country: "China",
    countryCode: "CN"
  },
]

export default topCities