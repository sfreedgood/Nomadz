// Data derived from Euromonitor International

let topCities = [
  {
    label: "Hong Kong",
    value: "HK",
    city: "Hong Kong",
    country: "Hong Kong",
    countryCode: "HK",
    rank: 1,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Singapore",
    value: "SG",
    city: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    rank: 4,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Bangkok",
    value: "TH",
    city: "Bangkok",
    country: "Thailand",
    countryCode: "TH",
    rank: 2,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Krabi",
    value: "TH",
    city: "Krabi",
    country: "Thailand",
    countryCode: "TH",
    rank: 100,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "London",
    value: "UK",
    city: "London",
    country: "United Kingdom",
    countryCode: "UK",
    rank: 3,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Macau",
    value: "MO",
    city: "Macau",
    country: "Macau",
    countryCode: "MO",
    rank: 5,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Kuala Lumpur",
    value: "MY",
    city: "Kuala Lumpur",
    country: "Malaysia",
    countryCode: "MY",
    rank: 9,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Johor Bahru",
    value: "MY",
    city: "Johor Bahru",
    country: "Malaysia",
    countryCode: "MY",
    rank: 37,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Penang Island",
    value: "MY",
    city: "Penang Island",
    country: "Malaysia",
    countryCode: "MY",
    rank: 66,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Shenzhen",
    value: "CN",
    city: "Shenzhen",
    country: "China",
    countryCode: "CN",
    rank: 10,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "New York City",
    value: "US",
    city: "New York City",
    country: "United States of America",
    countryCode: "US",
    rank: 8,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Antalya",
    value: "TR",
    city: "Antalya",
    country: "Turkey",
    countryCode: "TR",
    rank: 16,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Paris",
    value: "FR",
    city: "Paris",
    country: "France",
    countryCode: "FR",
    rank: 6,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Istanbul",
    value: "TR",
    city: "Istanbul",
    country: "Turkey",
    countryCode: "TR",
    rank: 12,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Rome",
    value: "IT",
    city: "Rome",
    country: "Italy",
    countryCode: "IT",
    rank: 15,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Dubai",
    value: "AE",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    rank: 7,
    rankYear: 2018,
    region: "Middle East"
  },
  {
    label: "Guangzhou",
    value: "CN",
    city: "Guangzhou",
    country: "China",
    countryCode: "CN",
    rank: 18,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Phuket",
    value: "TH",
    city: "Phuket",
    country: "Thailand",
    countryCode: "TH",
    rank: 11,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Mecca",
    value: "SA",
    city: "Mecca",
    country: "Saudi Arabia",
    countryCode: "SA",
    rank: 21,
    rankYear: 2018,
    region: "Middle East"
  },
  {
    label: "Pattaya",
    value: "TH",
    city: "Pattaya",
    country: "Thailand",
    countryCode: "TH",
    rank: 25,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Taipei City",
    value: "TW",
    city: "Taipei City",
    country: "Taiwan",
    countryCode: "TW",
    rank: 17,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Prague",
    value: "CZ",
    city: "Prague",
    country: "Czech Republic",
    countryCode: "CZ",
    rank: 20,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Shanghai",
    value: "CN",
    city: "Shanghai",
    country: "China",
    countryCode: "CN",
    rank: 26,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Las Vegas",
    value: "US",
    city: "Las Vegas",
    country: "United States of America",
    countryCode: "US",
    rank: 28,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Miami",
    value: "US",
    city: "Miami",
    country: "United States of America",
    countryCode: "US",
    rank: 22,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Barcelona",
    value: "ES",
    city: "Barcelona",
    country: "Spain",
    countryCode: "ES",
    rank: 31,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Moscow",
    value: "RU",
    city: "Moscow",
    country: "Russia",
    countryCode: "RU",
    rank: 48,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Beijing",
    value: "CN",
    city: "Beijing",
    country: "China",
    countryCode: "CN",
    rank: 54,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Los Angeles",
    value: "US",
    city: "Los Angeles",
    country: "United States of America",
    countryCode: "US",
    rank: 27,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Budapest",
    value: "HU",
    city: "Budapest",
    country: "Hungary",
    countryCode: "HU",
    rank: 57,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Vienna",
    value: "AT",
    city: "Vienna",
    country: "Austria",
    countryCode: "AT",
    rank: 34,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Amsterdam",
    value: "NL",
    city: "Amsterdam",
    country: "Netherlands",
    countryCode: "NL",
    rank: 23,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Sofia",
    value: "BG",
    city: "Sofia",
    country: "Bulgaria",
    countryCode: "BG",
    rank: null,
    rankYear: 2015,
    region: "Europe"
  },
  {
    label: "Madrid",
    value: "ES",
    city: "Madrid",
    country: "Spain",
    countryCode: "ES",
    rank: 43,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Orlando",
    value: "US",
    city: "Orlando",
    country: "United States of America",
    countryCode: "US",
    rank: 44,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Ho Chi Minh City",
    value: "VN",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    countryCode: "VN",
    rank: 39,
    rankYear: 2018,
    region: "Asia"
},
  {
    label: "Lima",
    value: "PE",
    city: "Lima",
    country: "Peru",
    countryCode: "PE",
    rank: 91,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Berlin",
    value: "DE",
    city: "Berlin",
    country: "Germany",
    countryCode: "DE",
    rank: 36,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Athens",
    value: "GR",
    city: "Athens",
    country: "Greece",
    countryCode: "GR",
    rank: 49,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Heraklion",
    value: "GR",
    city: "Heraklion",
    country: "Greece",
    countryCode: "GR",
    rank: 68,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Rhodes",
    value: "GR",
    city: "Rhodes",
    country: "Greece",
    countryCode: "GR",
    rank: 99,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Tokyo",
    value: "JP",
    city: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    rank: 14,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Osaka",
    value: "JP",
    city: "Osaka",
    country: "Japan",
    countryCode: "JP",
    rank: 30,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Kyoto",
    value: "JP",
    city: "Kyoto",
    country: "Japan",
    countryCode: "JP",
    rank: 67,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Chiba",
    value: "JP",
    city: "Chiba",
    country: "Japan",
    countryCode: "JP",
    rank: 90,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Warsaw",
    value: "PL",
    city: "Warsaw",
    country: "Poland",
    countryCode: "PL",
    rank: 74,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Krakow",
    value: "PL",
    city: "Krakow",
    country: "Poland",
    countryCode: "PL",
    rank: 75,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Chennai",
    value: "IN",
    city: "Chennai",
    country: "India",
    countryCode: "IN",
    rank: 45,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Cairo",
    value: "EG",
    city: "Cairo",
    country: "Egypt",
    countryCode: "EG",
    rank: 50,
    rankYear: 2018,
    region: "Africa"
  },
  {
    label: "Nairobi",
    value: "KE",
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
    rank: null,
    rankYear: 2015,
    region: "Africa"
  },
  {
    label: "Hangzhou",
    value: "CN",
    city: "Hangzhou",
    country: "China",
    countryCode: "CN",
    rank: null,
    rankYear: 2015,
    region: "Asia"
  },
  {
    label: "Milan",
    value: "IT",
    city: "Milan",
    country: "Italy",
    countryCode: "IT",
    rank: 32,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "San Francisco",
    value: "US",
    city: "San Francisco",
    country: "United States of America",
    countryCode: "US",
    rank: 73,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Buenos Aires",
    value: "AR",
    city: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR",
    rank: 89,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Venice",
    value: "IT",
    city: "Venice",
    country: "Italy",
    countryCode: "IT",
    rank: 41,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Mexico City" ,
    value: "MX",
    city: "Mexico City" ,
    country: "Mexico",
    countryCode: "MX",
    rank: 88,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Dublin",
    value: "IE",
    city: "Dublin",
    country: "Ireland",
    countryCode: "IE",
    rank: 46,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Seoul",
    value: "KR",
    city: "Seoul",
    country: "South Korea",
    countryCode: "KR",
    rank: 24,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Jeju",
    value: "KR",
    city: "Jeju",
    country: "South Korea",
    countryCode: "KR",
    rank: 87,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Mugla",
    value: "TR",
    city: "Mugla",
    country: "Turkey",
    countryCode: "TR",
    rank: null,
    rankYear: null,
    region: "Asia"
  },
  {
    label: "Mumbai",
    value: "IN",
    city: "Mumbai",
    country: "India",
    countryCode: "IN",
    rank: 19,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Denpasar",
    value: "ID",
    city: "Denpasar",
    country: "Indonesia",
    countryCode: "ID",
    rank: 33,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Delhi",
    value: "IN",
    city: "Delhi",
    country: "India",
    countryCode: "IN",
    rank: 13,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Toronto",
    value: "CA",
    city: "Toronto",
    country: "Canada",
    countryCode: "CA",
    rank: 52,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Zhuhai",
    value: "CN",
    city: "Zhuhai",
    country: "China",
    countryCode: "CN",
    rank: 65,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "St Petersburg",
    value: "RU",
    city: "St Petersburg",
    country: "Russia",
    countryCode: "RU",
    rank: 59,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Burgas",
    value: "BG",
    city: "Burgas",
    country: "Bulgaria",
    countryCode: "BG",
    rank: null,
    rankYear: null,
    region: "Europe"
  },
  {
    label: "Sydney",
    value: "AU",
    city: "Sydney",
    country: "Australia",
    countryCode: "AU",
    rank: 55,
    rankYear: 2018,
    region: "Oceania"
  },
  {
    label: "Djerba",
    value: "TN",
    city: "Djerba",
    country: "Tunisia",
    countryCode: "TN",
    rank: null,
    rankYear: null,
    region: "Africa"
  },
  {
    label: "Munich",
    value: "DE",
    city: "Munich",
    country: "Germany",
    countryCode: "DE",
    rank: 56,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Johannesburg",
    value: "ZA",
    city: "Johannesburg",
    country: "South Africa",
    countryCode: "ZA",
    rank: 38,
    rankYear: 2018,
    region: "Africa"
  },
  {
    label: "Cancun",
    value: "MX",
    city: "Cancun",
    country: "Mexico",
    countryCode: "MX",
    rank: 35,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Edirne",
    value: "TR",
    city: "Edirne",
    country: "Turkey",
    countryCode: "TR",
    rank: null,
    rankYear: null,
    region: "Asia"
  },
  {
    label: "Suzhou",
    value: "CN",
    city: "Suzhou",
    country: "China",
    countryCode: "CN",
    rank: null,
    rankYear: null,
    region: "Asia"
  },
  {
    label: "Bucharest",
    value: "RO",
    city: "Bucharest",
    country: "Romania",
    countryCode: "RO",
    rank: null,
    rankYear: null,
    region: "Europe"
  },
  {
    label: "Punta Cana",
    value: "DR",
    city: "Punta Cana",
    country: "Dominican Republic",
    countryCode: "DR",
    rank: 58,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Copenhagen",
    value: "DK",
    city: "Copenhagen",
    country: "Denmark",
    countryCode: "DK",
    rank: 72,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Agra",
    value: "IN",
    city: "Agra",
    country: "India",
    countryCode: "IN",
    rank: 29,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Jaipur",
    value: "IN",
    city: "Jaipur",
    country: "India",
    countryCode: "IN",
    rank: 42,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Brussels",
    value: "BE",
    city: "Brussels",
    country: "Belgium",
    countryCode: "BE",
    rank: 70,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Nice",
    value: "FR",
    city: "Nice",
    country: "France",
    countryCode: "FR",
    rank: 92,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Chiang Mai",
    value: "TH",
    city: "Chiang Mai",
    country: "Thailand",
    countryCode: "TH",
    rank: 64,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Sharm el-Sheikh",
    value: "EG",
    city: "Sharm el-Sheikh",
    country: "Egypt",
    countryCode: "EG",
    rank: null,
    rankYear: null,
    region: "Africa"
  },
  {
    label: "Lisbon",
    value: "PT",
    city: "Lisbon",
    country: "Portugal",
    countryCode: "PT",
    rank: 62,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Porto",
    value: "PT",
    city: "Porto",
    country: "Portugal",
    countryCode: "PT",
    rank: 96,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "East Province",
    value: "SA",
    city: "East Province",
    country: "Saudi Arabia",
    countryCode: "SA",
    rank: null,
    rankYear: null,
    region: "Middle East"
  },
  {
    label: "Marrakech",
    value: "MA",
    city: "Marrakech",
    country: "Morocco",
    countryCode: "MA",
    rank: 78,
    rankYear: 2018,
    region: "Africa"
  },
  {
    label: "Jakarta",
    value: "ID",
    city: "Jakarta",
    country: "Indonesia",
    countryCode: "ID",
    rank: 60,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Batam",
    value: "ID",
    city: "Batam",
    country: "Indonesia",
    countryCode: "ID",
    rank: 97,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Manama",
    value: "BH",
    city: "Manama",
    country: "Bahrain",
    countryCode: "BH",
    rank: null,
    rankYear: null,
    region: "Middle East"
  },
  {
    label: "Hanoi",
    value: "VN",
    city: "Hanoi",
    country: "Vietnam",
    countryCode: "VN",
    rank: 51,
    rankYear: 2018,
    region: "Asia"
  },
  // {
  //   label: "Ha Noi",
  //   value: "VN",
  //   city: "Ha Noi",
  //   country: "Vietnam",
  //   countryCode: "VN"
  // },
  {
    label: "Ha Long",
    value: "VN",
    city: "Ha Long",
    country: "Vietname",
    countryCode: "VN",
    rank: 53,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Honolulu",
    value: "US",
    city: "Honolulu",
    country: "United States of America",
    countryCode: "US",
    rank: 77,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Manila",
    value: "PH",
    city: "Manila",
    country: "Philippines",
    countryCode: "PH",
    rank: null,
    rankYear: null,
    region: "Asia"
  },
  {
    label: "Guilin",
    value: "CN",
    city: "Guilin",
    country: "China",
    countryCode: "CN",
    rank: 84,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Auckland",
    value: "NZ",
    city: "Auckland",
    country: "New Zealand",
    countryCode: "NZ",
    rank: 79,
    rankYear: 2018,
    region: "Oceania"
  },
  {
    label: "Siem Reap",
    value: "KH",
    city: "Siem Reap",
    country: "Cambodia",
    countryCode: "KH",
    rank: 86,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Phnom Penh",
    value: "KH",
    city: "Phnom Penh",
    country: "Cambodia",
    countryCode: "KH",
    rank: 69,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Sousse",
    value: "TN",
    city: "Sousse",
    country: "Tunisia",
    countryCode: "TN",
    rank: null,
    rankYear: null,
    region: "Africa"
  },
  {
    label: "Amman",
    value: "JO",
    city: "Amman",
    country: "Jordan",
    countryCode: "JO",
    rank: null,
    rankYear: null,
    region: "Middle East"
  },
  {
    label: "Vancouver",
    value: "CA",
    city: "Vancouver",
    country: "Canada",
    countryCode: "CA",
    rank: 71,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Abu Dhabi",
    value: "AE",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    countryCode: "AE",
    rank: 95,
    rankYear: 2018,
    region: "Middle East"
  },
  {
    label: "Kiev",
    value: "UA",
    city: "Kiev",
    country: "Ukraine",
    countryCode: "UA",
    rank: null,
    rankYear: null,
    region: "Europe"
  },
  {
    label: "Lviv",
    value: "UA",
    city: "Lviv",
    country: "Ukraine",
    countryCode: "UA",
    rank: 80,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Doha",
    value: "QR",
    city: "Doha",
    country: "Qatar",
    countryCode: "QR",
    rank: 98,
    rankYear: 2018,
    region: "Middle East"
  },
  {
    label: "Florence",
    value: "IT",
    city: "Florence",
    country: "Italy",
    countryCode: "IT",
    rank: 47,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Rio de Janeiro",
    value: "BR",
    city: "Rio de Janeiro",
    country: "Brazil",
    countryCode: "BR",
    rank: 94,
    rankYear: 2018,
    region: "Americas"
  },
  {
    label: "Melbourne",
    value: "AU",
    city: "Melbourne",
    country: "Australia",
    countryCode: "AU",
    rank: 76,
    rankYear: 2018,
    region: "Oceania"
  },
  {
    label: "Washington",
    value: "US",
    city: "Washington",
    country: "United States of America",
    countryCode: "US",
    rank: null,
    rankYear: null,
    region: "Americas"
  },
  {
    label: "Riyadh",
    value: "SA",
    city: "Riyadh",
    country: "Saudi Arabia",
    countryCode: "SA",
    rank: 40,
    rankYear: 2018,
    region: "Middle East"
  },
  {
    label: "Dammam City",
    value: "SA",
    city: "Dammam City",
    country: "Saudi Arabia",
    countryCode: "SA",
    rank: 61,
    rankYear: 2018,
    region: "Middle East"
  },
  {
    label: "Stockholm",
    value: "SE",
    city: "Stockholm",
    country: "Sweden",
    countryCode: "SE",
    rank: 85,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Christchurch",
    value: "NZ",
    city: "Christchurch",
    country: "New Zealand",
    countryCode: "NZ",
    rank: null,
    rankYear: null,
    region: "Oceania"
  },
  {
    label: "Frankfurt",
    value: "DE",
    city: "Frankfurt",
    country: "Germany",
    countryCode: "DE",
    rank: 83,
    rankYear: 2018,
    region: "Europe"
  },
  {
    label: "Baku",
    value: "AZ",
    city: "Baku",
    country: "Azerbaijan",
    countryCode: "AZ",
    rank: null,
    rankYear: null,
    region: "Asia"
  },
  {
    label: "Sao Paulo",
    value: "BR",
    city: "Sao Paulo",
    country: "Brazil",
    countryCode: "BR",
    rank: null,
    rankYear: null,
    region: "Americas"
  },
  {
    label: "Harare",
    value: "ZW",
    city: "Harare",
    country: "Zimbabwe",
    countryCode: "ZW",
    rank: null,
    rankYear: null,
    region: "Africa"
  },
  {
    label: "Kolkatta",
    value: "IN",
    city: "Kolkata",
    country: "India",
    countryCode: "IN",
    rank: 82,
    rankYear: 2018,
    region: "Asia"
  },
  {
    label: "Jerusalem",
    value: "IL",
    city: "Jerusalem",
    country: "Isreal",
    countryCode: "IL",
    rank: 63,
    rankYear: 2018,
    region: "MIddle East"
  },
  {
    label: "Tel Aviv",
    value: "IL",
    city: "Tel Aviv",
    country: "Isreal",
    countryCode: "IL",
    rank: 81,
    rankYear: 2018,
    region: "MIddle East"
  },
  {
    label: "Nanjing",
    value: "CN",
    city: "Nanjing",
    country: "China",
    countryCode: "CN",
    rank: null,
    rankYear: null,
    region: "Asia"
  },
  {
    label: "Santiago",
    value: "CL",
    city: "Santiago",
    country: "Chile",
    countryCode: "CL",
    rank: 93,
    rankYear: 2018,
    region: "Americas"
  },
]

export default topCities