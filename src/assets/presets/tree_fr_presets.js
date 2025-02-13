export default {
  proj_presets: [
    'EPSG:4326',
    'EPSG:2294',
    'EPSG:2295',
    'EPSG:2950',
    'EPSG:3005',
    'EPSG:3408',
    'EPSG:3410',
    'EPSG:3571',
    'EPSG:3572',
    'EPSG:3573',
    'EPSG:3574',
    'EPSG:3575',
    'EPSG:3576',
    'EPSG:3857',
    'EPSG:3978',
    'EPSG:3995',
    'EPSG:4267',
    'EPSG:4269',
    'EPSG:26707',
    'EPSG:26708',
    'EPSG:26709',
    'EPSG:26710',
    'EPSG:26711',
    'EPSG:26712',
    'EPSG:26713',
    'EPSG:26714',
    'EPSG:26715',
    'EPSG:26716',
    'EPSG:26717',
    'EPSG:26718',
    'EPSG:26719',
    'EPSG:26720',
    'EPSG:26721',
    'EPSG:26722',
    'EPSG:26907',
    'EPSG:26908',
    'EPSG:26909',
    'EPSG:26910',
    'EPSG:26911',
    'EPSG:26912',
    'EPSG:26913',
    'EPSG:26914',
    'EPSG:26915',
    'EPSG:26916',
    'EPSG:26917',
    'EPSG:26918',
    'EPSG:26919',
    'EPSG:26920',
    'EPSG:26921',
    'EPSG:26922',
    'EPSG:32187',
    'EPSG:32188',
    'EPSG:32198',
    'EPSG:32661',
    'EPSG:42101',
    'EPSG:42102',
    'EPSG:42304',
    'EPSG:102100',
    'EPSG:102185',
    'EPSG:900913',
    'AUTO2:42003',
  ],
  tree_fr_presets: [
    {
      Title: 'Précipitation',
      Name: 'Precipitation',
      isLeaf: false,
      children: [
        {
          Title: 'Pluie radar',
          Name: 'Radar rain',
          Img: 'Radar Rain',
          isLeaf: false,
          children: [
            {
              Title: 'Dynamic radar coverage for rain',
              Name: 'RADAR_COVERAGE_RRAI',
              isLeaf: true,
              isTemporal: true,
            },
            {
              Title: 'Inverted dynamic radar coverage for rain',
              Name: 'RADAR_COVERAGE_RRAI.INV',
              isLeaf: true,
              isTemporal: true,
            },
            {
              Title: 'Radar precipitation rate for rain [mm/h]',
              Name: 'RADAR_1KM_RRAI',
              isLeaf: true,
              isTemporal: true,
            },
          ],
        },
        {
          Title: 'Accumulation de pluie',
          Name: 'Rain accumulation',
          Img: 'Rain Accumulation',
          isLeaf: false,
          children: [
            {
              Title: 'HRDPS.CONTINENTAL - Rain accumulation [kg/m²]',
              Name: 'HRDPS.CONTINENTAL_RN',
              isLeaf: true,
              isTemporal: true,
            },
          ],
        },
        {
          Title: 'Neige radar',
          Name: 'Radar snow',
          Img: 'Radar Snow',
          isLeaf: false,
          children: [
            {
              Title: 'Dynamic radar coverage for snow',
              Name: 'RADAR_COVERAGE_RSNO',
              isLeaf: true,
              isTemporal: true,
            },
            {
              Title: 'Inverted dynamic radar coverage for snow',
              Name: 'RADAR_COVERAGE_RSNO.INV',
              isLeaf: true,
              isTemporal: true,
            },
            {
              Title: 'Radar precipitation rate for snow [cm/h]',
              Name: 'RADAR_1KM_RSNO',
              isLeaf: true,
              isTemporal: true,
            },
          ],
        },
        {
          Title: 'Accumulation de neige',
          Name: 'Snow accumulation',
          Img: 'Snow Accumulation',
          isLeaf: false,
          children: [
            {
              Title: 'HRDPS.CONTINENTAL - Snow accumulation [kg/m²]',
              Name: 'HRDPS.CONTINENTAL_SN',
              isLeaf: true,
              isTemporal: true,
            },
          ],
        },
        {
          Title: 'Épaisseur de neige',
          Name: 'Snow depth',
          Img: 'Snow Depth',
          isLeaf: false,
          children: [
            {
              Title: 'HRDPS.CONTINENTAL - Snow depth [m]',
              Name: 'HRDPS.CONTINENTAL_SD',
              isLeaf: true,
              isTemporal: true,
            },
          ],
        },
        {
          Title: 'Type de précipitation',
          Name: 'Precipitation type',
          Img: 'Precipitation Type',
          isLeaf: false,
          children: [
            {
              Title:
                'GDPS.DIAG - Instantaneous precipitation type (3 hourly forecast)',
              Name: 'GDPS.DIAG_PTYPE.PT3H',
              isLeaf: true,
              isTemporal: true,
              opacity: 0.85,
            },
          ],
        },
        {
          Title: "Probabilité d'orage",
          Name: 'Probability of thunderstorm',
          Img: 'Probability of Thunderstorm',
          isLeaf: false,
          children: [
            {
              Title: 'HRDPS-WEonG - Probability of thunderstorm occurence [%]',
              Name: 'HRDPS-WEonG_2.5km_Thunderstorm-Prob',
              isLeaf: true,
              isTemporal: true,
            },
          ],
        },
      ],
    },
    {
      Title: 'Satellite',
      Name: 'Satellite',
      isLeaf: false,
      children: [
        {
          Title: 'Naturelle + IR de nuit',
          Name: 'Natural NightIR',
          Img: 'Sattelite Natural NightIR',
          isLeaf: false,
          children: [
            {
              Title: 'GOES-East Night IR [2 km]',
              Name: 'GOES-East_2km_NightIR',
              isLeaf: true,
              isTemporal: true,
              opacity: 1,
            },
            {
              Title: 'GOES-East Natural Color [1 km]',
              Name: 'GOES-East_1km_NaturalColor',
              isLeaf: true,
              isTemporal: true,
              opacity: 1,
            },
          ],
        },
      ],
    },
    {
      Title: 'Événements environnementaux extrêmes',
      Name: 'Extreme Environmental Events',
      isLeaf: false,
      children: [
        {
          Title: "Trajectoires d'ouragan",
          Name: 'Hurricane tracks',
          Img: 'Shrugging-Emojis',
          isLeaf: false,
          children: [
            {
              Title: 'Hurricane Forecast Location',
              Name: 'HURRICANE_CENTRE',
              isLeaf: true,
              isTemporal: true,
              opacity: 1,
            },
            {
              Title: 'Hurricane Line Segments',
              Name: 'HURRICANE_LINE',
              isLeaf: true,
              isTemporal: true,
              opacity: 1,
            },
            {
              Title: 'Hurricane Track Forecast Error',
              Name: 'HURRICANE_ERR',
              isLeaf: true,
              isTemporal: true,
              opacity: 1,
            },
            {
              Title: 'Hurricane Wind Forecast Wind Radii',
              Name: 'HURRICANE_RAD',
              isLeaf: true,
              isTemporal: true,
              opacity: 1,
            },
            {
              Title: 'Hurricane Response Zone',
              Name: 'HURRICANE_RESPONSE_ZONE',
              isLeaf: true,
              isTemporal: true,
              opacity: 1,
            },
          ],
        },
      ],
    },
  ],
}
