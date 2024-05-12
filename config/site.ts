export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Facebook Marketplace Nationwide Search",
  description: "Search the Facebook Marketplace across entire countries",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    donate: "https://www.paypal.com/donate/?hosted_button_id=VDZATQAYQMVM6",
    github: "https://github.com/gmoz22/facebook-marketplace-nationwide",
  },
  filters: {
    defaultDeliveryMethod: "local_pick_up",
    deliveryMethod: {
      local_pick_up: "Local Pickup",
      shipping: "Shipping"
    },
    radius: "radius",
    defaultSortBy: "best_match",
    sortBy: {
      best_match: "Suggested",
      distance_ascend: "Distance: Nearest first",
      creation_time_descend: "Date Listed: Newest first",
      price_ascend: "Price: Lowest first",
      price_descend: "Price: Highest first",
    },
    minPrice: "minPrice",
    maxPrice: "maxPrice",
    itemCondition: {
      new: "New",
      used_like_new: "Used Like New",
      used_good: "Used Good",
      used_fair: "Used Fair",
    },
    defaultAvailability: "in stock",
    availability: {
      "in stock": "Available",
      "out of stock": "Sold"
    },
    defaultDaysSinceListed: "0",
    daysSinceListed: {
      "0": "All",
      "1": "Last 24 hours",
      "7": "Last 7 days",
      "30": "Last 30 days",
    }
  },
  templateURL: {
    miles: "https://www.facebook.com/marketplace/|CITY|/search?query=|STRING|&radius=805",
    kms: "https://www.facebook.com/marketplace/|CITY|/search?query=|STRING|&radius=500",
  },
  countriesPerRow: 6,
  countries: {
    "usa": {
      "name": "USA (without AK or HI)",
      "icon": "usa_48.svg",
      "locale": "miles",
      "cities": [
        "Portland, OR",
        "Los Angeles, CA",
        "Durango, CO",
        "Broadus, MT",
        "Fort Worth, TX",
        "Boscobel, WI",
        "Fitzgerald, GA",
        "Oneonta, NY",
      ],
      "cities_fb": [
        "portland",
        "la",
        "108129565875623",
        "109613652398861",
        "114148045261892",
        "106171882747436",
        "112442175434378",
        "113333232014461",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B804670%2C34.0536909%2C-118.242766%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C45.5202471%2C-122.6741949%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C31.7098163%2C-83.2518613%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C42.4517838%2C-75.0569094%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C43.1367176%2C-90.7068445%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C37.2713951%2C-107.8815978%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C32.7762719%2C-97.3241996%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C45.4390698%2C-105.4059145%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%5D",
    },
    "usa_full": {
      "name": "USA",
      "icon": "usa.svg",
      "locale": "miles",
      "cities": [
        "Portland, OR",
        "Los Angeles, CA",
        "Durango, CO",
        "Broadus, MT",
        "Fort Worth, TX",
        "Boscobel, WI",
        "Fitzgerald, GA",
        "Oneonta, NY",
        "McGrath, AK",
        "Prudhoe Bay, AK",
        "Unalaska, AK",
        "Elfin Cove, AK",
        "Honolulu, HI",
      ],
      "cities_fb": [
        "portland",
        "la",
        "108129565875623",
        "109613652398861",
        "114148045261892",
        "106171882747436",
        "112442175434378",
        "113333232014461",
        "108203532540672",
        "171705676191734",
        "103760199662259",
        "196626670491979",
        "110444738976181",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B804670%2C34.0536909%2C-118.242766%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C45.5202471%2C-122.6741949%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C30.3321838%2C-81.655651%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C41.3041686%2C-72.9209145%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C41.8755616%2C-87.6244212%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C37.2713951%2C-107.8815978%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C32.7762719%2C-96.7968559%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C44.670905%2C-103.851407%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C58.1935012%2C-136.3338942%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C53.8296649%2C-166.4659941%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C62.963938%2C-155.596626%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C70.2239534%2C-148.370467%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%2C%5B804670%2C21.3046519%2C-157.8544616%2C%22%23FFAAAA%22%2C%22%23FF0000%22%2C0.4%5D%5D",
    },
    "can": {
      "name": "Canada",
      "icon": "canada.svg",
      "locale": "kms",
      "cities": [
        "Saint Quentin, NB",
        "Baysville, ON",
        "Compeer, AB",
        "One Hundred Mile House, BC",
        "Moosehorn, MB",
        "Skibi Lake, ON",
        "Yellowknife, NT",
        "White Horse, YK",
        "Channel-Port aux Basques, NL",
      ],
      "cities_fb": [
        "108562712499750",
        "183509305085293",
        "112682018747951",
        "111922062167097",
        "112583085425676",
        "362073744288039",
        "114459998571182",
        "115392538472860",
        "115477851802820",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C45.1461581%2C-79.1138363%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500005.84%2C51.8606184%2C-110.0028572%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500005.84%2C51.8044551%2C-121.4685143%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500005.84%2C51.2890722%2C-98.4174528%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500010%2C50.6192195%2C-86.9350551%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C47.513141%2C-67.3900101%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C62.4510419%2C-114.3420232%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C60.7000649%2C-134.9855867%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C47.5777988%2C-59.1757039%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "mex": {
      "name": "Mexico",
      "icon": "mexico.svg",
      "locale": "kms",
      "cities": [
        "Irapuato,Guanajuato ",
        "Chapala, Jalisco",
        "Creel, Chihuahua",
        "Monclova, Coahuila",
        "Campeche, Campeche",
        "Cabo San Lucas, Baja California",
        "Tehuantepec, Oaxaca",
      ],
      "cities_fb": [
        "108476082510080",
        "106142666084683",
        "110176719011514",
        "110799538947338",
        "619367721515573",
        "154130198035072",
        "116186601728289",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C20.6657448%2C-101.3450739%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C19.8327623%2C-90.5397534%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C16.5743033%2C-95.9895844%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C26.8896633%2C-101.3904641%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C27.7472776%2C-107.6049954%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C22.9055613%2C-109.927761%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C29.3775411%2C-114.3911662%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "bra": {
      "name": "Brazil",
      "icon": "brazil.svg",
      "locale": "kms",
      "cities": [
        "Betim, Minas Gerais",
        "Ibaiti, Paraná",
        "Montes Claros de Goiás, Goiás",
        "Alto Da Várzea, Ceara",
        "Várzea Nova, Bahia",
        "Salinas, Minas Gerais",
        "Piquiá, Amazonas",
        "Bom Jardim, Para",
        "Salto do Jacuí, Rio Grande Do Sud",
        "Altamira do Maranhão, Maranhão",
        "Brasnorte, Mato Grosso",
        "Corguinho, Mato Grosso Do Sul",
        "Dianópolis, Tocantins",
        "Japurá, Amazonas",
        "Barraca Da Bôca, Amapa",
        "Pôrto Velho, Rondônia",
        "Feijó, Acre",
        "Vista Alegre, Roraima",
      ],
      "cities_fb": [
        "241025963776891",
        "107813919248792",
        "182609075084572",
        "115057491845194",
        "400163803477498",
        "630835887017960",
        "111605828861709",
        "112619282090096",
        "110549925683118",
        "112596635420890",
        "173196699369921",
        "108281459194195",
        "113373648672696",
        "107544435935385",
        "117344181609620",
        "108549759176811",
        "103727253000065",
        "117248258288799",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C-8.1434849%2C-70.3151205%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-1.8730636%2C-67.0079887%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C1.7262839%2C-61.1357504%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-0.5835399%2C-52.5676445%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-8.7725608%2C-63.8906012%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-4.1356271%2C-59.3484436%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-4.2064291%2C-45.4535647%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-7.0488099%2C-52.4353763%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-12.1240903%2C-57.9980056%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-6.5109339%2C-38.6718847%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-11.2596949%2C-40.9357548%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-11.6338475%2C-46.8134585%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-29.096171%2C-53.2061282%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-15.9991469%2C-51.3962031%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-19.8285652%2C-54.8277749%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-23.8432603%2C-50.1821344%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-16.1251137%2C-42.2912042%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-19.9902675%2C-44.2076523%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-7.2988659%2C-80.1236511%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "arg": {
      "name": "Argentina",
      "icon": "argentina.svg",
      "locale": "kms",
      "cities": [
        "Pehuajó, Buenos Aires",
        "Ulapes, La Rioja",
        "Mburucuyá, Corrientes",
        "Rosario de la Frontera, Salta",
        "La Reforma, La Pampa",
        "Paso de Indios, Chubut",
        "Rio Gallegos, Santa Cruz",
      ],
      "cities_fb": [
        "112089622140241",
        "107413102628881",
        "103767409662395",
        "108630072495327",
        "106494259383808",
        "105646196135882",
        "300807386607332",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C-35.815772%2C-61.909924%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-31.573715%2C-66.219649%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-28.048195%2C-58.212194%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-25.793744%2C-64.964858%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-37.555894%2C-66.216564%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-43.873841%2C-69.038118%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-51.576813%2C-69.136995%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "aus": {
      "name": "Australia",
      "icon": "australia.svg",
      "locale": "kms",
      "cities": [
        "Tamworth, NSW",
        "Deniliquin, NSW",
        "Oakden Hills, SA",
        "Warralakin, WA",
        "Yeppoon, QLD",
        "Hobart, TAS",
        "Darwin, NT",
        "Carnarvon, WA",
        "Port Hedland, WA",
        "Port Douglas, QLD",
        "Cloncurry, QLD",
        "Alice Springs, NT",
        "Quilpie, QLD",
      ],
      "cities_fb": [
        "112577755420955",
        "104020242968596",
        "277036799317188",
        "106555549377269",
        "108131009215930",
        "111652435519898",
        "109437725742749",
        "103825936322408",
        "248019175333793",
        "106373139394499",
        "112359378775421",
        "107929299235881",
        "109465839072367",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C-23.1348035%2C150.7436625%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-31.0900743%2C150.9290159%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-35.5302183%2C144.9597178%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-31.6340904%2C137.0093025%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-30.973621%2C118.5704973%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-16.4845983%2C145.4636294%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-42.8825088%2C147.3281233%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-20.3111814%2C118.5801181%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-12.46044%2C130.8410469%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-23.6983884%2C133.8812885%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-20.7289898%2C139.4931522%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-26.6152676%2C144.2600904%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-24.8826131%2C113.6576486%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
      "cities_miles": ["Warburton, Western Australia", "Mount Magnet, Western Australia", "Coober Pedy, South Australia", "Melbourne, Victoria, Australia", "Tooraweenah", "Clermont, Queensland", "Daly Waters, Northern Territory", "Broome, Western Australia"],
      "cities_fb_miles": ["112262705457494", "105508376148373", "107723845924377", "melbourne", "107928752568747", "105632482805073", "108276829196663", "112099285474124"],
      "coverage_miles": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B804670%2C-26.1403024%2C126.6814526%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-29.0133682%2C134.7536164%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-37.8142176%2C144.9631608%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-31.4403083%2C148.9093839%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-23.6174986%2C145.9922449%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-16.1712445%2C136.0689777%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-17.9566909%2C122.2240181%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B804670%2C-28.0888045%2C117.8367428%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "nzl": {
      "name": "New Zealand",
      "icon": "new-zealand.svg",
      "locale": "kms",
      "cities": [
        "Hamilton",
        "Lake Tekapo",
      ],
      "cities_fb": [
        "104080336295923",
        "106528236047934",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C-37.7695969%2C175.2463252%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C-44.0409932%2C170.5061219%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "ind": {
      "name": "India",
      "icon": "india.svg",
      "locale": "kms",
      "cities": [
        "Sanquelim, Goa",
        "Sangrur, Punjab",
        "Kolkata, West Bengal",
        "Himatnagar, Gujarat",
        "Allahabad, Uttar Pradesh",
        "Bhamragarh, Maharashtra",
        "Salem, Tamil Nadu",
      ],
      "cities_fb": [
        "104029036299831",
        "109148435777996",
        "108212225873404",
        "112269678784935",
        "2099665383411187",
        "115852108431709",
        "1410397895862431",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B16093.4%2C17.9966867%2C78.1776495%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C10.6204893%2C79.3052242%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C19.3398817%2C80.07254%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C23.6170281%2C72.4826435%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C30.2552732%2C75.8657524%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C25.435664%2C81.850003%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C22.5215371%2C87.856952%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C15.5262366%2C74.0321799%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "gbr": {
      "name": "United Kingdom",
      "icon": "united-kingdom.svg",
      "locale": "kms",
      "cities": [
        "Manchester",
        "Kirkwall",
      ],
      "cities_fb": [
        "114629675219759",
        "107972512564724",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C53.4403605%2C-2.228909%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C58.9934518%2C-2.932034%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "fra": {
      "name": "France",
      "icon": "france.svg",
      "locale": "kms",
      "cities": [
        "Chartres",
        "Montpellier",
      ],
      "cities_fb": [
        "115700691777803",
        "115100621840245",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C48.4453028%2C1.4954562%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C43.60923%2C3.8802127%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
    "spa": {
      "name": "Spain",
      "icon": "spain.svg",
      "locale": "kms",
      "cities": [
        "Plasencia",
        "Valencia",
      ],
      "cities_fb": [
        "108336475863182",
        "2404588816444858",
      ],
      "coverage": "https://www.mapdevelopers.com/draw-circle-tool.php?circles=%5B%5B500000%2C40.0300176%2C-6.0854631%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%2C%5B500000%2C39.4400399%2C-0.4076288%2C%22%23AAAAAA%22%2C%22%23000000%22%2C0.4%5D%5D",
    },
  }
}
