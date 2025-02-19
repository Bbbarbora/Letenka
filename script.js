const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };

// 1.  Vypište do stránky název startovní a cílové země.

  document.body.innerHTML = `<p style= "color:rgb(130, 25, 211); font-weight : bold;  ">Startovní zeme je  ${flight.countryFrom.name} a cilova zeme je ${flight.countryTo.name}.</P> <br>`;

//  2. Uložte do separátní proměnné objekt udávající maximální rozměry zavazadel.

const maxDimensionBags = flight.baglimit;



//  3. Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém vypište do stránky.


document.body.innerHTML += `Šírka príručnej batožiny: ${maxDimensionBags.hand_width} cm<br>`;
document.body.innerHTML += `Výška príručnej batožiny: ${maxDimensionBags.hand_height} cm<br>`;
document.body.innerHTML += `Dĺžka príručnej batožiny: ${maxDimensionBags.hand_length} cm<br>`;


// 4.   Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.

  const secondBagPriceCzk = Math.ceil (flight.bags_price[2]*25.04)
  document.body.innerHTML += `<p style = "color:blue; font-weight: 500; font-size: 1.4rem" >Za druhé zavazadlo si cestující zaplatí ${secondBagPriceCzk}  CZK. </p> <br>`;

  // 5.Pridanie stylu
