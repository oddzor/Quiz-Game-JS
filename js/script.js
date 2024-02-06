// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://sywoixmfimdjfqgvznzc.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey);

let quizUser = prompt("Enter your name", "Quiz User"); // Prompt to enter name //

if (quizUser != null) {
  document.getElementById("quiz__user__name").innerHTML =
    "Good luck," + " " + quizUser + "!";
} // Name prompt will show up on the top portion of the page as "Good luck, (input from prompt)!" //

// This section will "activate" the alternatives and submit button for JS usage //
const questionElement = document.getElementById("question__wrapper");
const answerButtons = [
  document.getElementById("options__wrapper__1"),
  document.getElementById("options__wrapper__2"),
  document.getElementById("options__wrapper__3"),
  document.getElementById("options__wrapper__4"),
];


const submitButton = document.getElementById("submit__answer__button"); // Onclick for submit button to be linked to following functions to check selected option and execute functions.
if (submitButton) {
  submitButton.addEventListener('click', () => {
    console.log("Submit button clicked");
    loadQuestionStartTimer();
  });
} else {
  console.warn("Submit button not found.");
}

// Onclick function for 
function onOptionClick(event) {
  console.log("Option clicked:", event.target.id);
//
}

const optionIds = [  // Array of quiz options to simplify onclick event by looping through the array instead of making individual onclick cases.
  "options__wrapper__1",
  "options__wrapper__2",
  "options__wrapper__3",
  "options__wrapper__4"
];

optionIds.forEach(id => {
  const element = document.getElementById(id);  // A forEach loop through the optionIDs array to determine which option was clicked before submit button was clicked.
  if (element) {
    element.addEventListener('click', onOptionClick);
  } else {
    console.warn(`Element with id '${id}' not found.`);
  }
});


  // Question bank array is collapsed, but containing objects referencing all 195 countries in the world (List should be up to date 2023) //
  const questionBank = [
    {
      questionText: "What is the capital of Afghanistan",
      answers: ["Algiers", "Thimpu", "Kabul", "Islamabad"],
      correctAnswer: "Kabul",
    },

    {
      questionText: "What is the capital of Albania",
      answers: ["Timbuktu", "Split", "Yerevan", "Tirana"],
      correctAnswer: "Tirana",
    },

    {
      questionText: "What is the capital of Algeria",
      answers: ["Dhaka", "Algiers", "Nassau", "Gaborone"],
      correctAnswer: "Algiers",
    },

    {
      questionText: "What is the capital of Andorra",
      answers: ["Andorra La Vella", "Benin", "Sarajevo", "Sofia"],
      correctAnswer: "Andorra La Vella",
    },

    {
      questionText: "What is the capital of Angola",
      answers: ["Kinhasa", "Ougadogo", "Luanda", "Belmopan"],
      correctAnswer: "Luanda",
    },
    {
      questionText: "What is the capital of Argentina?",
      answers: ["Buenos Aires", "Lima", "Santiago", "Montevideo"],
      correctAnswer: "Buenos Aires",
    },
    {
      questionText: "What is the capital of Armenia?",
      answers: ["Tbilisi", "Yerevan", "Baku", "Ankara"],
      correctAnswer: "Yerevan",
    },
    {
      questionText: "What is the capital of Australia?",
      answers: ["Canberra", "Sydney", "Melbourne", "Wellington"],
      correctAnswer: "Canberra",
    },
    {
      questionText: "What is the capital of Austria?",
      answers: ["Vienna", "Munich", "Zurich", "Budapest"],
      correctAnswer: "Vienna",
    },
    {
      questionText: "What is the capital of Azerbaijan?",
      answers: ["Tashkent", "Ashgabat", "Baku", "Tehran"],
      correctAnswer: "Baku",
    },

    {
      questionText: "What is the capital of The Bahamas?",
      answers: ["Nassau", "Havana", "Kingston", "Bridgetown"],
      correctAnswer: "Nassau",
    },
    {
      questionText: "What is the capital of Bahrain?",
      answers: ["Manama", "Doha", "Abu Dhabi", "Muscat"],
      correctAnswer: "Manama",
    },
    {
      questionText: "What is the capital of Bangladesh?",
      answers: ["Dhaka", "Kathmandu", "Colombo", "Islamabad"],
      correctAnswer: "Dhaka",
    },
    {
      questionText: "What is the capital of Barbados?",
      answers: ["Bridgetown", "Castries", "Roseau", "Port of Spain"],
      correctAnswer: "Bridgetown",
    },
    {
      questionText: "What is the capital of Belarus?",
      answers: ["Minsk", "Moscow", "Kiev", "Vilnius"],
      correctAnswer: "Minsk",
    },
    {
      questionText: "What is the capital of Belgium?",
      answers: ["Brussels", "Amsterdam", "Luxembourg", "Paris"],
      correctAnswer: "Brussels",
    },
    {
      questionText: "What is the capital of Belize?",
      answers: ["Belmopan", "San Salvador", "Guatemala City", "Tegucigalpa"],
      correctAnswer: "Belmopan",
    },
    {
      questionText: "What is the capital of Benin?",
      answers: ["Porto-Novo", "Lome", "Accra", "Niamey"],
      correctAnswer: "Porto-Novo",
    },
    {
      questionText: "What is the capital of Bhutan?",
      answers: ["Thimphu", "Dharamshala", "Kathmandu", "Gangtok"],
      correctAnswer: "Thimphu",
    },
    {
      questionText: "What is the capital of Bolivia?",
      answers: ["Sucre", "La Paz", "Quito", "Asuncion"],
      correctAnswer: "Sucre",
    },
    {
      questionText: "What is the capital of Bosnia and Herzegovina?",
      answers: ["Sarajevo", "Zagreb", "Belgrade", "Skopje"],
      correctAnswer: "Sarajevo",
    },
    {
      questionText: "What is the capital of Botswana?",
      answers: ["Harare", "Gaborone", "Lusaka", "Windhoek"],
      correctAnswer: "Gaborone",
    },
    {
      questionText: "What is the capital of Brazil?",
      answers: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Buenos Aires"],
      correctAnswer: "Brasilia",
    },
    {
      questionText: "What is the capital of Brunei?",
      answers: ["Kuala Lumpur", "Jakarta", "Bandar Seri Begawan", "Bangkok"],
      correctAnswer: "Bandar Seri Begawan",
    },
    {
      questionText: "What is the capital of Bulgaria?",
      answers: ["Sofia", "Bucharest", "Budapest", "Athens"],
      correctAnswer: "Sofia",
    },
    {
      questionText: "What is the capital of Burkina Faso?",
      answers: ["Ouagadougou", "Bamako", "Niamey", "Dakar"],
      correctAnswer: "Ouagadougou",
    },
    {
      questionText: "What is the capital of Burundi?",
      answers: ["Kigali", "Bujumbura", "Dodoma", "Kampala"],
      correctAnswer: "Bujumbura",
    },
    {
      questionText: "What is the capital of Cambodia?",
      answers: ["Phnom Penh", "Bangkok", "Vientiane", "Hanoi"],
      correctAnswer: "Phnom Penh",
    },
    {
      questionText: "What is the capital of Cameroon?",
      answers: ["Yaounde", "N'Djamena", "Libreville", "Bangui"],
      correctAnswer: "Yaounde",
    },
    {
      questionText: "What is the capital of Canada?",
      answers: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
      correctAnswer: "Ottawa",
    },
    {
      questionText: "What is the capital of Cape Verde?",
      answers: ["Praia", "Maputo", "Luanda", "Bissau"],
      correctAnswer: "Praia",
    },
    {
      questionText: "What is the capital of the Central African Republic?",
      answers: ["Bangui", "N'Djamena", "Yaounde", "Kinshasa"],
      correctAnswer: "Bangui",
    },
    {
      questionText: "What is the capital of Chad?",
      answers: ["N'Djamena", "Khartoum", "Niamey", "Bamako"],
      correctAnswer: "N'Djamena",
    },
    {
      questionText: "What is the capital of Chile?",
      answers: ["Santiago", "Lima", "Buenos Aires", "Montevideo"],
      correctAnswer: "Santiago",
    },
    {
      questionText: "What is the capital of China?",
      answers: ["Beijing", "Shanghai", "Hong Kong", "Taipei"],
      correctAnswer: "Beijing",
    },
    {
      questionText: "What is the capital of Colombia?",
      answers: ["Bogota", "Caracas", "Quito", "Lima"],
      correctAnswer: "Bogota",
    },
    {
      questionText: "What is the capital of Comoros?",
      answers: ["Moroni", "Antananarivo", "Port Louis", "Victoria"],
      correctAnswer: "Moroni",
    },
    {
      questionText:
        "What is the capital of the Democratic Republic of the Congo?",
      answers: ["Kinshasa", "Brazzaville", "Luanda", "Kampala"],
      correctAnswer: "Kinshasa",
    },
    {
      questionText: "What is the capital of the Republic of the Congo?",
      answers: ["Brazzaville", "Kinshasa", "Libreville", "Bangui"],
      correctAnswer: "Brazzaville",
    },
    {
      questionText: "What is the capital of Costa Rica?",
      answers: ["San Jose", "Managua", "Panama City", "Tegucigalpa"],
      correctAnswer: "San Jose",
    },
    {
      questionText: "What is the capital of Croatia?",
      answers: ["Zagreb", "Belgrade", "Ljubljana", "Sarajevo"],
      correctAnswer: "Zagreb",
    },
    {
      questionText: "What is the capital of Cuba?",
      answers: ["Havana", "Kingston", "Nassau", "Santo Domingo"],
      correctAnswer: "Havana",
    },
    {
      questionText: "What is the capital of Cyprus?",
      answers: ["Nicosia", "Athens", "Ankara", "Beirut"],
      correctAnswer: "Nicosia",
    },
    {
      questionText: "What is the capital of the Czech Republic?",
      answers: ["Prague", "Bratislava", "Budapest", "Warsaw"],
      correctAnswer: "Prague",
    },
    {
      questionText: "What is the capital of Denmark?",
      answers: ["Copenhagen", "Oslo", "Stockholm", "Helsinki"],
      correctAnswer: "Copenhagen",
    },
    {
      questionText: "What is the capital of Djibouti?",
      answers: ["Djibouti", "Mogadishu", "Asmara", "Sana'a"],
      correctAnswer: "Djibouti",
    },
    {
      questionText: "What is the capital of Dominica?",
      answers: ["Roseau", "Bridgetown", "Kingstown", "Castries"],
      correctAnswer: "Roseau",
    },
    {
      questionText: "What is the capital of the Dominican Republic?",
      answers: ["Santo Domingo", "Port-au-Prince", "Havana", "Kingston"],
      correctAnswer: "Santo Domingo",
    },
    {
      questionText: "What is the capital of Ecuador?",
      answers: ["Quito", "Lima", "Bogota", "Caracas"],
      correctAnswer: "Quito",
    },
    {
      questionText: "What is the capital of Egypt?",
      answers: ["Cairo", "Alexandria", "Luxor", "Aswan"],
      correctAnswer: "Cairo",
    },
    {
      questionText: "What is the capital of El Salvador?",
      answers: ["San Salvador", "Guatemala City", "Managua", "Tegucigalpa"],
      correctAnswer: "San Salvador",
    },
    {
      questionText: "What is the capital of Equatorial Guinea?",
      answers: ["Malabo", "Yaounde", "Libreville", "Bata"],
      correctAnswer: "Malabo",
    },
    {
      questionText: "What is the capital of Eritrea?",
      answers: ["Asmara", "Djibouti", "Khartoum", "Mogadishu"],
      correctAnswer: "Asmara",
    },
    {
      questionText: "What is the capital of Estonia?",
      answers: ["Tallinn", "Riga", "Vilnius", "Helsinki"],
      correctAnswer: "Tallinn",
    },
    {
      questionText: "What is the capital of Eswatini (Swaziland)?",
      answers: ["Mbabane", "Maputo", "Pretoria", "Gaborone"],
      correctAnswer: "Mbabane",
    },
    {
      questionText: "What is the capital of Ethiopia?",
      answers: ["Addis Ababa", "Nairobi", "Kampala", "Djibouti"],
      correctAnswer: "Addis Ababa",
    },
    {
      questionText: "What is the capital of Fiji?",
      answers: ["Suva", "Nuku'alofa", "Apia", "Port Moresby"],
      correctAnswer: "Suva",
    },
    {
      questionText: "What is the capital of Finland?",
      answers: ["Helsinki", "Stockholm", "Oslo", "Copenhagen"],
      correctAnswer: "Helsinki",
    },
    {
      questionText: "What is the capital of France?",
      answers: ["Paris", "Brussels", "Madrid", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      questionText: "What is the capital of Gabon?",
      answers: ["Libreville", "Yaounde", "Brazzaville", "Kinshasa"],
      correctAnswer: "Libreville",
    },
    {
      questionText: "What is the capital of The Gambia?",
      answers: ["Banjul", "Dakar", "Bissau", "Conakry"],
      correctAnswer: "Banjul",
    },
    {
      questionText: "What is the capital of Georgia?",
      answers: ["Tbilisi", "Yerevan", "Baku", "Ankara"],
      correctAnswer: "Tbilisi",
    },
    {
      questionText: "What is the capital of Germany?",
      answers: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correctAnswer: "Berlin",
    },
    {
      questionText: "What is the capital of Ghana?",
      answers: ["Accra", "Lagos", "Abuja", "Dakar"],
      correctAnswer: "Accra",
    },
    {
      questionText: "What is the capital of Greece?",
      answers: ["Athens", "Thessaloniki", "Sparta", "Rhodes"],
      correctAnswer: "Athens",
    },
    {
      questionText: "What is the capital of Grenada?",
      answers: ["St. George's", "Bridgetown", "Kingstown", "Roseau"],
      correctAnswer: "St. George's",
    },
    {
      questionText: "What is the capital of Guatemala?",
      answers: ["Guatemala City", "San Salvador", "Tegucigalpa", "Managua"],
      correctAnswer: "Guatemala City",
    },
    {
      questionText: "What is the capital of Guinea?",
      answers: ["Conakry", "Bissau", "Freetown", "Dakar"],
      correctAnswer: "Conakry",
    },
    {
      questionText: "What is the capital of Guinea-Bissau?",
      answers: ["Bissau", "Conakry", "Banjul", "Dakar"],
      correctAnswer: "Bissau",
    },
    {
      questionText: "What is the capital of Guyana?",
      answers: ["Georgetown", "Paramaribo", "Port of Spain", "Bridgetown"],
      correctAnswer: "Georgetown",
    },
    {
      questionText: "What is the capital of Haiti?",
      answers: ["Port-au-Prince", "Kingston", "Santo Domingo", "Nassau"],
      correctAnswer: "Port-au-Prince",
    },
    {
      questionText: "What is the capital of Honduras?",
      answers: ["Tegucigalpa", "San Salvador", "Managua", "Guatemala City"],
      correctAnswer: "Tegucigalpa",
    },
    {
      questionText: "What is the capital of Hungary?",
      answers: ["Budapest", "Vienna", "Prague", "Bratislava"],
      correctAnswer: "Budapest",
    },
    {
      questionText: "What is the capital of Iceland?",
      answers: ["Reykjavik", "Oslo", "Copenhagen", "Helsinki"],
      correctAnswer: "Reykjavik",
    },
    {
      questionText: "What is the capital of India?",
      answers: ["New Delhi", "Mumbai", "Bangalore", "Kolkata"],
      correctAnswer: "New Delhi",
    },
    {
      questionText: "What is the capital of Indonesia?",
      answers: ["Jakarta", "Bali", "Surabaya", "Bandung"],
      correctAnswer: "Jakarta",
    },
    {
      questionText: "What is the capital of Iran?",
      answers: ["Tehran", "Baghdad", "Kabul", "Ankara"],
      correctAnswer: "Tehran",
    },
    {
      questionText: "What is the capital of Iraq?",
      answers: ["Baghdad", "Kuwait City", "Damascus", "Tehran"],
      correctAnswer: "Baghdad",
    },
    {
      questionText: "What is the capital of Ireland?",
      answers: ["Dublin", "Belfast", "Cork", "Galway"],
      correctAnswer: "Dublin",
    },
    {
      questionText: "What is the capital of Israel?",
      answers: ["Jerusalem", "Tel Aviv", "Haifa", "Eilat"],
      correctAnswer: "Jerusalem",
    },
    {
      questionText: "What is the capital of Italy?",
      answers: ["Rome", "Milan", "Venice", "Naples"],
      correctAnswer: "Rome",
    },
    {
      questionText: "What is the capital of Jamaica?",
      answers: ["Kingston", "Nassau", "Havana", "Bridgetown"],
      correctAnswer: "Kingston",
    },
    {
      questionText: "What is the capital of Japan?",
      answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      correctAnswer: "Tokyo",
    },
    {
      questionText: "What is the capital of Jordan?",
      answers: ["Amman", "Damascus", "Beirut", "Jerusalem"],
      correctAnswer: "Amman",
    },
    {
      questionText: "What is the capital of Kazakhstan?",
      answers: ["Nur-Sultan", "Almaty", "Bishkek", "Tashkent"],
      correctAnswer: "Nur-Sultan",
    },
    {
      questionText: "What is the capital of Kenya?",
      answers: ["Nairobi", "Kampala", "Dar es Salaam", "Mogadishu"],
      correctAnswer: "Nairobi",
    },
    {
      questionText: "What is the capital of Kiribati?",
      answers: ["Tarawa", "Suva", "Nuku'alofa", "Majuro"],
      correctAnswer: "Tarawa",
    },
    {
      questionText: "What is the capital of Kosovo?",
      answers: ["Pristina", "Belgrade", "Skopje", "Sarajevo"],
      correctAnswer: "Pristina",
    },
    {
      questionText: "What is the capital of Kosovo?",
      answers: ["Pristina", "Skopje", "Tirana", "Belgrade"],
      correctAnswer: "Pristina",
    },
    {
      questionText: "What is the capital of Kuwait?",
      answers: ["Kuwait City", "Riyadh", "Doha", "Manama"],
      correctAnswer: "Kuwait City",
    },
    {
      questionText: "What is the capital of Kyrgyzstan?",
      answers: ["Bishkek", "Dushanbe", "Astana", "Tashkent"],
      correctAnswer: "Bishkek",
    },
    {
      questionText: "What is the capital of Laos?",
      answers: ["Vientiane", "Phnom Penh", "Bangkok", "Hanoi"],
      correctAnswer: "Vientiane",
    },
    {
      questionText: "What is the capital of Latvia?",
      answers: ["Riga", "Vilnius", "Tallinn", "Helsinki"],
      correctAnswer: "Riga",
    },
    {
      questionText: "What is the capital of Lebanon?",
      answers: ["Beirut", "Damascus", "Amman", "Jerusalem"],
      correctAnswer: "Beirut",
    },
    {
      questionText: "What is the capital of Lesotho?",
      answers: ["Maseru", "Gaborone", "Pretoria", "Windhoek"],
      correctAnswer: "Maseru",
    },
    {
      questionText: "What is the capital of Liberia?",
      answers: ["Monrovia", "Freetown", "Conakry", "Abidjan"],
      correctAnswer: "Monrovia",
    },
    {
      questionText: "What is the capital of Libya?",
      answers: ["Tripoli", "Cairo", "Tunis", "Algiers"],
      correctAnswer: "Tripoli",
    },
    {
      questionText: "What is the capital of Liechtenstein?",
      answers: ["Vaduz", "Bern", "Zurich", "Innsbruck"],
      correctAnswer: "Vaduz",
    },
    {
      questionText: "What is the capital of Lithuania?",
      answers: ["Vilnius", "Riga", "Tallinn", "Minsk"],
      correctAnswer: "Vilnius",
    },
    {
      questionText: "What is the capital of Luxembourg?",
      answers: ["Luxembourg", "Brussels", "Amsterdam", "Paris"],
      correctAnswer: "Luxembourg",
    },
    {
      questionText: "What is the capital of Madagascar?",
      answers: ["Antananarivo", "Port Louis", "Maputo", "Moroni"],
      correctAnswer: "Antananarivo",
    },
    {
      questionText: "What is the capital of Malawi?",
      answers: ["Lilongwe", "Harare", "Maputo", "Lusaka"],
      correctAnswer: "Lilongwe",
    },
    {
      questionText: "What is the capital of Malaysia?",
      answers: ["Kuala Lumpur", "Singapore", "Jakarta", "Bangkok"],
      correctAnswer: "Kuala Lumpur",
    },
    {
      questionText: "What is the capital of Maldives?",
      answers: ["Male", "Colombo", "Thimphu", "Kathmandu"],
      correctAnswer: "Male",
    },
    {
      questionText: "What is the capital of Mali?",
      answers: ["Bamako", "Dakar", "Niamey", "Ouagadougou"],
      correctAnswer: "Bamako",
    },
    {
      questionText: "What is the capital of Malta?",
      answers: ["Valletta", "Nicosia", "Rome", "Athens"],
      correctAnswer: "Valletta",
    },
    {
      questionText: "What is the capital of the Marshall Islands?",
      answers: ["Majuro", "Tarawa", "Palikir", "Yaren"],
      correctAnswer: "Majuro",
    },
    {
      questionText: "What is the capital of Mauritania?",
      answers: ["Nouakchott", "Bamako", "Dakar", "Niamey"],
      correctAnswer: "Nouakchott",
    },
    {
      questionText: "What is the capital of Mauritius?",
      answers: ["Port Louis", "Antananarivo", "Moroni", "Port Victoria"],
      correctAnswer: "Port Louis",
    },
    {
      questionText: "What is the capital of Mexico?",
      answers: ["Mexico City", "Guadalajara", "Monterrey", "Cancun"],
      correctAnswer: "Mexico City",
    },
    {
      questionText: "What is the capital of Micronesia?",
      answers: ["Palikir", "Majuro", "Yaren", "Tarawa"],
      correctAnswer: "Palikir",
    },
    {
      questionText: "What is the capital of Moldova?",
      answers: ["Chisinau", "Bucharest", "Kiev", "Sofia"],
      correctAnswer: "Chisinau",
    },
    {
      questionText: "What is the capital of Monaco?",
      answers: ["Monaco", "Nice", "Genoa", "Marseille"],
      correctAnswer: "Monaco",
    },
    {
      questionText: "What is the capital of Mongolia?",
      answers: ["Ulaanbaatar", "Beijing", "Astana", "Vladivostok"],
      correctAnswer: "Ulaanbaatar",
    },
    {
      questionText: "What is the capital of Montenegro?",
      answers: ["Podgorica", "Belgrade", "Sarajevo", "Skopje"],
      correctAnswer: "Podgorica",
    },
    {
      questionText: "What is the capital of Morocco?",
      answers: ["Rabat", "Casablanca", "Marrakech", "Tunis"],
      correctAnswer: "Rabat",
    },
    {
      questionText: "What is the capital of Mozambique?",
      answers: ["Maputo", "Harare", "Lilongwe", "Lusaka"],
      correctAnswer: "Maputo",
    },
    {
      questionText: "What is the capital of Myanmar (Burma)?",
      answers: ["Naypyidaw", "Yangon (Rangoon)", "Bangkok", "Kuala Lumpur"],
      correctAnswer: "Naypyidaw",
    },
    {
      questionText: "What is the capital of Namibia?",
      answers: ["Windhoek", "Luanda", "Gaborone", "Pretoria"],
      correctAnswer: "Windhoek",
    },
    {
      questionText: "What is the capital of Nauru?",
      answers: ["Yaren", "Tarawa", "Majuro", "Palikir"],
      correctAnswer: "Yaren",
    },
    {
      questionText: "What is the capital of Nepal?",
      answers: ["Kathmandu", "Thimphu", "Dhaka", "New Delhi"],
      correctAnswer: "Kathmandu",
    },
    {
      questionText: "What is the capital of the Netherlands?",
      answers: ["Amsterdam", "The Hague", "Rotterdam", "Brussels"],
      correctAnswer: "Amsterdam",
    },
    {
      questionText: "What is the capital of New Zealand?",
      answers: ["Wellington", "Auckland", "Christchurch", "Sydney"],
      correctAnswer: "Wellington",
    },
    {
      questionText: "What is the capital of Nicaragua?",
      answers: ["Managua", "San Jose", "Tegucigalpa", "Panama City"],
      correctAnswer: "Managua",
    },
    {
      questionText: "What is the capital of Niger?",
      answers: ["Niamey", "Bamako", "Ouagadougou", "N'Djamena"],
      correctAnswer: "Niamey",
    },
    {
      questionText: "What is the capital of Nigeria?",
      answers: ["Abuja", "Lagos", "Kano", "Ibadan"],
      correctAnswer: "Abuja",
    },
    {
      questionText: "What is the capital of North Korea?",
      answers: ["Pyongyang", "Seoul", "Beijing", "Tokyo"],
      correctAnswer: "Pyongyang",
    },
    {
      questionText: "What is the capital of North Macedonia?",
      answers: ["Skopje", "Sofia", "Belgrade", "Tirana"],
      correctAnswer: "Skopje",
    },
    {
      questionText: "What is the capital of Norway?",
      answers: ["Oslo", "Stockholm", "Copenhagen", "Helsinki"],
      correctAnswer: "Oslo",
    },
    {
      questionText: "What is the capital of Oman?",
      answers: ["Muscat", "Riyadh", "Abu Dhabi", "Doha"],
      correctAnswer: "Muscat",
    },
    {
      questionText: "What is the capital of Pakistan?",
      answers: ["Islamabad", "Karachi", "Lahore", "New Delhi"],
      correctAnswer: "Islamabad",
    },
    {
      questionText: "What is the capital of Palau?",
      answers: ["Ngerulmud", "Koror", "Yaren", "Majuro"],
      correctAnswer: "Ngerulmud",
    },
    {
      questionText: "What is the capital of Panama?",
      answers: ["Panama City", "San Jose", "Managua", "Bogota"],
      correctAnswer: "Panama City",
    },
    {
      questionText: "What is the capital of Papua New Guinea?",
      answers: ["Port Moresby", "Suva", "Honiara", "Nuku'alofa"],
      correctAnswer: "Port Moresby",
    },
    {
      questionText: "What is the capital of Paraguay?",
      answers: ["Asuncion", "Montevideo", "Buenos Aires", "Lima"],
      correctAnswer: "Asuncion",
    },
    {
      questionText: "What is the capital of Peru?",
      answers: ["Lima", "Quito", "La Paz", "Santiago"],
      correctAnswer: "Lima",
    },
    {
      questionText: "What is the capital of the Philippines?",
      answers: ["Manila", "Quezon City", "Cebu City", "Davao City"],
      correctAnswer: "Manila",
    },
    {
      questionText: "What is the capital of Poland?",
      answers: ["Warsaw", "Krakow", "Gdansk", "Wroclaw"],
      correctAnswer: "Warsaw",
    },
    {
      questionText: "What is the capital of Portugal?",
      answers: ["Lisbon", "Porto", "Faro", "Braga"],
      correctAnswer: "Lisbon",
    },
    {
      questionText: "What is the capital of Qatar?",
      answers: ["Doha", "Dubai", "Abu Dhabi", "Manama"],
      correctAnswer: "Doha",
    },
    {
      questionText: "What is the capital of Romania?",
      answers: ["Bucharest", "Budapest", "Sofia", "Belgrade"],
      correctAnswer: "Bucharest",
    },
    {
      questionText: "What is the capital of Russia?",
      answers: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
      correctAnswer: "Moscow",
    },
    {
      questionText: "What is the capital of Rwanda?",
      answers: ["Kigali", "Bujumbura", "Kampala", "Nairobi"],
      correctAnswer: "Kigali",
    },
    {
      questionText: "What is the capital of Saint Kitts and Nevis?",
      answers: ["Basseterre", "Kingstown", "Roseau", "Castries"],
      correctAnswer: "Basseterre",
    },
    {
      questionText: "What is the capital of Saint Lucia?",
      answers: ["Castries", "Bridgetown", "Kingstown", "Roseau"],
      correctAnswer: "Castries",
    },
    {
      questionText: "What is the capital of Saint Vincent and the Grenadines?",
      answers: ["Kingstown", "Bridgetown", "Castries", "Roseau"],
      correctAnswer: "Kingstown",
    },
    {
      questionText: "What is the capital of Samoa?",
      answers: ["Apia", "Nuku'alofa", "Suva", "Port Moresby"],
      correctAnswer: "Apia",
    },
    {
      questionText: "What is the capital of San Marino?",
      answers: ["San Marino", "Vatican City", "Rome", "Monaco"],
      correctAnswer: "San Marino",
    },
    {
      questionText: "What is the capital of Sao Tome and Principe?",
      answers: ["Sao Tome", "Libreville", "Malabo", "Luanda"],
      correctAnswer: "Sao Tome",
    },
    {
      questionText: "What is the capital of Saudi Arabia?",
      answers: ["Riyadh", "Jeddah", "Mecca", "Medina"],
      correctAnswer: "Riyadh",
    },
    {
      questionText: "What is the capital of Senegal?",
      answers: ["Dakar", "Banjul", "Bissau", "Conakry"],
      correctAnswer: "Dakar",
    },
    {
      questionText: "What is the capital of Serbia?",
      answers: ["Belgrade", "Sarajevo", "Skopje", "Zagreb"],
      correctAnswer: "Belgrade",
    },
    {
      questionText: "What is the capital of Seychelles?",
      answers: ["Victoria", "Port Louis", "Antananarivo", "Moroni"],
      correctAnswer: "Victoria",
    },
    {
      questionText: "What is the capital of Sierra Leone?",
      answers: ["Freetown", "Monrovia", "Conakry", "Banjul"],
      correctAnswer: "Freetown",
    },
    {
      questionText: "What is the capital of Singapore?",
      answers: ["Singapore", "Kuala Lumpur", "Jakarta", "Bangkok"],
      correctAnswer: "Singapore",
    },
    {
      questionText: "What is the capital of Slovakia?",
      answers: ["Bratislava", "Prague", "Budapest", "Vienna"],
      correctAnswer: "Bratislava",
    },
    {
      questionText: "What is the capital of Slovenia?",
      answers: ["Ljubljana", "Zagreb", "Vienna", "Budapest"],
      correctAnswer: "Ljubljana",
    },
    {
      questionText: "What is the capital of the Solomon Islands?",
      answers: ["Honiara", "Port Moresby", "Suva", "Apia"],
      correctAnswer: "Honiara",
    },
    {
      questionText: "What is the capital of Somalia?",
      answers: ["Mogadishu", "Djibouti", "Addis Ababa", "Nairobi"],
      correctAnswer: "Mogadishu",
    },
    {
      questionText: "What is the capital of South Africa?",
      answers: ["Pretoria", "Cape Town", "Bloemfontein", "Johannesburg"],
      correctAnswer: "Pretoria",
    },
    {
      questionText: "What is the capital of South Korea?",
      answers: ["Seoul", "Pyongyang", "Tokyo", "Beijing"],
      correctAnswer: "Seoul",
    },
    {
      questionText: "What is the capital of South Sudan?",
      answers: ["Juba", "Khartoum", "Addis Ababa", "Nairobi"],
      correctAnswer: "Juba",
    },
    {
      questionText: "What is the capital of Spain?",
      answers: ["Madrid", "Barcelona", "Seville", "Valencia"],
      correctAnswer: "Madrid",
    },
    {
      questionText: "What is the capital of Sri Lanka?",
      answers: ["Sri Jayawardenepura Kotte", "Colombo", "Galle", "Kandy"],
      correctAnswer: "Sri Jayawardenepura Kotte",
    },
    {
      questionText: "What is the capital of Sudan?",
      answers: ["Khartoum", "Juba", "Cairo", "Addis Ababa"],
      correctAnswer: "Khartoum",
    },
    {
      questionText: "What is the capital of Suriname?",
      answers: ["Paramaribo", "Georgetown", "Cayenne", "Port of Spain"],
      correctAnswer: "Paramaribo",
    },
    {
      questionText: "What is the capital of Sweden?",
      answers: ["Stockholm", "Gothenburg", "Malmo", "Helsinki"],
      correctAnswer: "Stockholm",
    },
    {
      questionText: "What is the capital of Switzerland?",
      answers: ["Bern", "Zurich", "Geneva", "Basel"],
      correctAnswer: "Bern",
    },
    {
      questionText: "What is the capital of Syria?",
      answers: ["Damascus", "Aleppo", "Beirut", "Amman"],
      correctAnswer: "Damascus",
    },
    {
      questionText: "What is the capital of Taiwan?",
      answers: ["Taipei", "Kaohsiung", "Taichung", "Tainan"],
      correctAnswer: "Taipei",
    },
    {
      questionText: "What is the capital of Taiwan?",
      answers: ["Taipei", "Beijing", "Shanghai", "Hong Kong"],
      correctAnswer: "Taipei",
    },
    {
      questionText: "What is the capital of Tajikistan?",
      answers: ["Dushanbe", "Bishkek", "Tashkent", "Kabul"],
      correctAnswer: "Dushanbe",
    },
    {
      questionText: "What is the capital of Tanzania?",
      answers: ["Dodoma", "Dar es Salaam", "Nairobi", "Kampala"],
      correctAnswer: "Dodoma",
    },
    {
      questionText: "What is the capital of Thailand?",
      answers: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
      correctAnswer: "Bangkok",
    },
    {
      questionText: "What is the capital of Togo?",
      answers: ["Lome", "Accra", "Ouagadougou", "Cotonou"],
      correctAnswer: "Lome",
    },
    {
      questionText: "What is the capital of Tonga?",
      answers: ["Nuku'alofa", "Apia", "Suva", "Port Vila"],
      correctAnswer: "Nuku'alofa",
    },
    {
      questionText: "What is the capital of Trinidad and Tobago?",
      answers: ["Port of Spain", "Kingstown", "Bridgetown", "Castries"],
      correctAnswer: "Port of Spain",
    },
    {
      questionText: "What is the capital of Tunisia?",
      answers: ["Tunis", "Algiers", "Rabat", "Tripoli"],
      correctAnswer: "Tunis",
    },
    {
      questionText: "What is the capital of Turkey?",
      answers: ["Ankara", "Istanbul", "Izmir", "Antalya"],
      correctAnswer: "Ankara",
    },
    {
      questionText: "What is the capital of Turkmenistan?",
      answers: ["Ashgabat", "Tashkent", "Bishkek", "Dushanbe"],
      correctAnswer: "Ashgabat",
    },
    {
      questionText: "What is the capital of Tuvalu?",
      answers: ["Funafuti", "Tarawa", "Nuku'alofa", "Apia"],
      correctAnswer: "Funafuti",
    },
    {
      questionText: "What is the capital of Uganda?",
      answers: ["Kampala", "Nairobi", "Kigali", "Dodoma"],
      correctAnswer: "Kampala",
    },
    {
      questionText: "What is the capital of Ukraine?",
      answers: ["Kyiv", "Lviv", "Odessa", "Minsk"],
      correctAnswer: "Kyiv",
    },
    {
      questionText: "What is the capital of the United Arab Emirates?",
      answers: ["Abu Dhabi", "Dubai", "Doha", "Riyadh"],
      correctAnswer: "Abu Dhabi",
    },
    {
      questionText: "What is the capital of the United Kingdom?",
      answers: ["London", "Edinburgh", "Cardiff", "Belfast"],
      correctAnswer: "London",
    },
    {
      questionText: "What is the capital of the United States?",
      answers: ["Washington D.C.", "New York City", "Los Angeles", "Chicago"],
      correctAnswer: "Washington D.C.",
    },
    {
      questionText: "What is the capital of Uruguay?",
      answers: ["Montevideo", "Buenos Aires", "Asuncion", "Santiago"],
      correctAnswer: "Montevideo",
    },
    {
      questionText: "What is the capital of Uzbekistan?",
      answers: ["Tashkent", "Samarkand", "Bishkek", "Dushanbe"],
      correctAnswer: "Tashkent",
    },
    {
      questionText: "What is the capital of Vanuatu?",
      answers: ["Port Vila", "Suva", "Nuku'alofa", "Honiara"],
      correctAnswer: "Port Vila",
    },
    {
      questionText: "What is the capital of Vatican City?",
      answers: ["Vatican City", "Rome", "San Marino", "Monaco"],
      correctAnswer: "Vatican City",
    },
    {
      questionText: "What is the capital of Venezuela?",
      answers: ["Caracas", "Bogota", "Quito", "Lima"],
      correctAnswer: "Caracas",
    },
    {
      questionText: "What is the capital of Vietnam?",
      answers: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"],
      correctAnswer: "Hanoi",
    },
    {
      questionText: "What is the capital of Yemen?",
      answers: ["Sana'a", "Aden", "Muscat", "Riyadh"],
      correctAnswer: "Sana'a",
    },
    {
      questionText: "What is the capital of Zambia?",
      answers: ["Lusaka", "Harare", "Gaborone", "Windhoek"],
      correctAnswer: "Lusaka",
    },
    {
      questionText: "What is the capital of Zimbabwe?",
      answers: ["Harare", "Bulawayo", "Lusaka", "Gaborone"],
      correctAnswer: "Harare",
    },
  ];

  function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questionBank.length);
  } // Returns a random value in the array length to randomize questions //
  
  function loadRandomQuestion() {
    const randomIndex = getRandomQuestionIndex(); 
    loadQuestion(randomIndex); 
    startTimer(); // Function to load the random question and calls on the timer start function each time a new question is loaded //
  }

  window.onload = loadRandomQuestion; // Loads random question based on the previous function into the HTML elements //


function loadQuestion(questionIndex) {
  let question = questionBank[questionIndex];
  questionElement.innerText = question.questionText;
  question.answers.forEach((answer, index) => {
    answerButtons[index].innerText = answer;
  });
}

loadQuestion();

function startTimer() {
let sec = 20;
  let timerInterval = setInterval(quizTimer, 1000);
  function quizTimer() {
    document.getElementById("countdown__timer").innerHTML ="You have" + " " + sec + " " + "seconds";
    sec--;
    if (sec == 0 ) {
      clearInterval(timerInterval);
      loadQuestionStartTimer();
    }
  } 
}



function checkAnswer() {  // Check answerButtons onclick to match correctAnswer from the array object.
if (selectedAnswer === correctAnswer) {
  pointCalculation();
  savePoints(); 
} else zeroPoints();
}

function pointCalculation (remainingTime) {  // Based on time remaining when the submitAnswerButton is clicked, calculate points 
  let points = 100 - (5 * (20 - remainingTime));
  if (points < 0) {
   points = 0;
  } return points;
 }


function savePoints () {

}

function loadQuestionStartTimer () {  // Load new question and restart timer 
loadRandomQuestion();
startTimer();
}

function zeroPoints() {
  savePoints(0);
}



function submitAnswerFlow () { // Should be executed to run the nested functions when submitanswer is clicked. 
checkAnswer();
pointCalculation();
savePoints();
loadQuestionStartTimer();
}

