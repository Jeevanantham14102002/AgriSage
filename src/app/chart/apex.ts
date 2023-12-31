export let ApexSyntheticData: any = {
    series: [{
      name: 'Previous Prices',
      data: [],  // We'll fill this with fetched data
    }],
    chart: {
      id: 'previous-data',
      type: 'line',
      colors: ['#4454c3'],
      height: 400,
      zoom: {
        autoScaleYaxis: false
      },
      toolbar: {
        show: false  // Hide toolbar to make it a clean line chart
      }

    },
    dataLabels: {
      enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#4454c3']  // Set line color
      },
      
    markers: {
      size: 0,  // Set marker size to 0 to hide markers
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 6,
    },
    yaxis: {
      show: false
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    grid: {
      show: false
    },
    colors: ['#4454c3'],  // Set line color
  };
  
  export let ApexFinalPriceData: any = {
    series: [{
      name: 'Future Prices',
      data: [],
    }],
    chart: {
      id: 'future-price-chart',
      type: 'line',
      colors: ['#ff9900'],
      height: 400,
      zoom: {
        autoScaleYaxis: false
      },
      toolbar: {
        show: false  // Hide toolbar to make it a clean line chart
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#ff9900']  // Set line color
      },
      
    markers: {
      size: 0,  // Set marker size to 0 to hide markers
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 6,
    },
    yaxis: {
      show: false
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    grid: {
      show: false
    },
    colors: ['#ff9900'],  // Set line color
  };
  
  

export let ApexRandomData : any = {
  series: [{
      data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 31.00],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 31.29],
          [1328223600000, 31.85],
          [1328482800000, 31.86],
          [1328569200000, 32.28],
          [1328655600000, 32.10],
          [1328742000000, 32.65],
          [1328828400000, 32.21],
          [1329087600000, 32.35],
          [1329174000000, 32.44],
          [1329260400000, 32.46],
          [1329346800000, 32.86],
          [1329433200000, 32.75],
          [1329778800000, 32.54],
          [1329865200000, 32.33],
          [1329951600000, 32.97],
          [1330038000000, 33.41],
          [1330297200000, 33.27],
          [1330383600000, 33.27],
          [1330470000000, 32.89],
          [1330556400000, 33.10],
          [1330642800000, 33.73],
          [1330902000000, 33.22],
          [1330988400000, 31.99],
          [1331074800000, 32.41],
          [1331161200000, 33.05],
          [1331247600000, 33.64],
          [1331506800000, 33.56],
          [1331593200000, 34.22],
          [1331679600000, 33.77],
          [1331766000000, 34.17],
          [1331852400000, 33.82],
          [1332111600000, 34.51],
          [1332198000000, 33.16],
          [1332284400000, 33.56],
          [1332370800000, 33.71],
          [1332457200000, 33.81],
          [1332712800000, 34.40],
          [1332799200000, 34.63],
          [1332885600000, 34.46],
          [1332972000000, 34.48],
          [1333058400000, 34.31],
          [1333317600000, 34.70],
          [1333404000000, 34.31],
          [1333490400000, 33.46],
          [1333576800000, 33.59],
          [1333922400000, 33.22],
          [1334008800000, 32.61],
          [1334095200000, 33.01],
          [1334181600000, 33.55],
          [1334268000000, 33.18],
          [1334527200000, 32.84],
          [1334613600000, 33.84],
          [1334700000000, 33.39],
          [1334786400000, 32.91],
          [1334872800000, 33.06],
          [1335132000000, 32.62],
          [1335218400000, 32.40],
          [1335304800000, 33.13],
          [1335391200000, 33.26],
          [1335477600000, 33.58],
          [1335736800000, 33.55],
          [1335823200000, 33.77],
          [1335909600000, 33.76],
          [1335996000000, 33.32],
          [1336082400000, 32.61],
          [1336341600000, 32.52],
          [1336428000000, 32.67],
          [1336514400000, 32.52],
          [1336600800000, 31.92],
          [1336687200000, 32.20],
          [1336946400000, 32.23],
          [1337032800000, 32.33],
          [1337119200000, 32.36],
          [1337205600000, 32.01],
          [1337292000000, 31.31],
          [1337551200000, 32.01],
          [1337637600000, 32.01],
          [1337724000000, 32.18],
          [1337810400000, 31.54],
          [1337896800000, 31.60],
          [1338242400000, 32.05],
          [1338328800000, 31.29],
          [1338415200000, 31.05],
          [1338501600000, 29.82],
          [1338760800000, 30.31],
          [1338847200000, 30.70],
          [1338933600000, 31.69],
          [1339020000000, 31.32],
          [1339106400000, 31.65],
          [1339365600000, 31.13],
          [1339452000000, 31.77],
          [1339538400000, 31.79],
          [1339624800000, 31.67],
          [1339711200000, 32.39],
          [1339970400000, 32.63],
          [1340056800000, 32.89],
          [1340143200000, 31.99],
          [1340229600000, 31.23],
          [1340316000000, 31.57],
          [1340575200000, 30.84],
          [1340661600000, 31.07],
          [1340748000000, 31.41],
          [1340834400000, 31.17],
          [1340920800000, 32.37],
          [1341180000000, 32.19],
          [1341266400000, 32.51],
          [1341439200000, 32.53],
          [1341525600000, 31.37],
          [1341784800000, 30.43],
          [1341871200000, 30.44],
          [1341957600000, 30.20],
          [1342044000000, 30.14],
          [1342130400000, 30.65],
          [1342389600000, 30.40],
          [1342476000000, 30.65],
          [1342562400000, 31.43],
          [1342648800000, 31.89],
          [1342735200000, 31.38],
          [1342994400000, 30.64],
          [1343080800000, 30.02],
          [1343167200000, 30.33],
          [1343253600000, 30.95],
          [1343340000000, 31.89],
          [1343599200000, 31.01],
          [1343685600000, 30.88],
          [1343772000000, 30.69],
          [1343858400000, 30.58],
          [1343944800000, 32.02],
          [1344204000000, 32.14],
          [1344290400000, 32.37],
          [1344376800000, 32.51],
          [1344463200000, 32.65],
          [1344549600000, 32.64],
          [1344808800000, 32.27],
          [1344895200000, 32.10],
          [1344981600000, 32.91],
          [1345068000000, 33.65],
          [1345154400000, 33.80],
          [1345413600000, 33.92],
          [1345500000000, 33.75],
          [1345586400000, 33.84],
          [1345672800000, 33.50],
          [1345759200000, 32.26],
          [1346018400000, 32.32],
          [1346104800000, 32.06],
          [1346191200000, 31.96],
          [1346277600000, 31.46],
          [1346364000000, 31.27],
          [1346709600000, 31.43],
          [1346796000000, 32.26],
          [1346882400000, 32.79],
          [1346968800000, 32.46],
          [1347228000000, 32.13],
          [1347314400000, 32.43],
          [1347400800000, 32.42],
          [1347487200000, 32.81],
          [1347573600000, 33.34],
          [1347832800000, 33.41],
          [1347919200000, 32.57],
          [1348005600000, 33.12],
          [1348092000000, 34.53],
          [1348178400000, 33.83],
          [1348437600000, 33.41],
          [1348524000000, 32.90],
          [1348610400000, 32.53],
          [1348696800000, 32.80],
          [1348783200000, 32.44],
          [1349042400000, 32.62],
          [1349128800000, 32.57],
          [1349215200000, 32.60],
          [1349301600000, 32.68],
          [1349388000000, 32.47],
          [1349647200000, 32.23],
          [1349733600000, 31.68],
          [1349820000000, 31.51],
          [1349906400000, 31.78],
          [1349992800000, 31.94],
          [1350252000000, 32.33],
          [1350338400000, 33.24],
          [1350424800000, 33.44],
          [1350511200000, 33.48],
          [1350597600000, 33.24],
          [1350856800000, 33.49],
          [1350943200000, 33.31],
          [1351029600000, 33.36],
          [1351116000000, 33.40],
          [1351202400000, 34.01],
          [1351638000000, 34.02],
          [1351724400000, 34.36],
          [1351810800000, 34.39],
          [1352070000000, 34.24],
          [1352156400000, 34.39],
          [1352242800000, 33.47],
          [1352329200000, 32.98],
          [1352415600000, 32.90],
          [1352674800000, 32.70],
          [1352761200000, 32.54],
          [1352847600000, 32.23],
          [1352934000000, 32.64],
          [1353020400000, 32.65],
          [1353279600000, 32.92],
          [1353366000000, 32.64],
          [1353452400000, 32.84],
          [1353625200000, 33.40],
          [1353884400000, 33.30],
          [1353970800000, 33.18],
          [1354057200000, 33.88],
          [1354143600000, 34.09],
          [1354230000000, 34.61],
          [1354489200000, 34.70],
          [1354575600000, 35.30],
          [1354662000000, 35.40],
          [1354748400000, 35.14],
          [1354834800000, 35.48],
          [1355094000000, 35.75],
          [1355180400000, 35.54],
          [1355266800000, 35.96],
          [1355353200000, 35.53],
          [1355439600000, 37.56],
          [1355698800000, 37.42],
          [1355785200000, 37.49],
          [1355871600000, 38.09],
          [1355958000000, 37.87],
          [1356044400000, 37.71],
          [1356303600000, 37.53],
          [1356476400000, 37.55],
          [1356562800000, 37.30],
          [1356649200000, 36.90],
          [1356908400000, 37.68],
          [1357081200000, 38.34],
          [1357167600000, 37.75],
          [1357254000000, 38.13],
          [1357513200000, 37.94],
          [1357599600000, 38.14],
          [1357686000000, 38.66],
          [1357772400000, 38.62],
          [1357858800000, 38.09],
          [1358118000000, 38.16],
          [1358204400000, 38.15],
          [1358290800000, 37.88],
          [1358377200000, 37.73],
          [1358463600000, 37.98],
          [1358809200000, 37.95],
          [1358895600000, 38.25],
          [1358982000000, 38.10],
          [1359068400000, 38.32],
          [1359327600000, 38.24],
          [1359414000000, 38.52],
          [1359500400000, 37.94],
          [1359586800000, 37.83],
          [1359673200000, 38.34],
          [1359932400000, 38.10],
          [1360018800000, 38.51],
          [1360105200000, 38.40],
          [1360191600000, 38.07],
          [1360278000000, 39.12],
          [1360537200000, 38.64],
          [1360623600000, 38.89],
          [1360710000000, 38.81],
          [1360796400000, 38.61],
          [1360882800000, 38.63],
          [1361228400000, 38.99],
          [1361314800000, 38.77],
          [1361401200000, 38.34],
          [1361487600000, 38.55],
          [1361746800000, 38.11],
          [1361833200000, 38.59],
          [1361919600000, 39.60],
      ]
  }],
  colors: ['#4454c3'],
  chart: {
      id: 'area-datetime',
      type: 'area',
      height: 220,
      zoom: {
          autoScaleYaxis: false
      }
  },
  yaxis: {
      show:false
   },


  markers: {
      size: 0
  },
  xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
  },
  tooltip: {
      x: {
          format: 'dd MMM yyyy'
      }
  },

  grid:{
      show:false
  },
  dataLabels: {
      enabled: false
  },
}

export let ApexChartData : any = {
  series: [{
      name: 'New Customers',
      data: [31, 40, 78, 51, 92, 65, 90]
  }, {
      name: 'Existing customers',
      data: [50, 34, 45, 82, 34, 52, 41]
  }],
  colors: ['#266cd4', '#e5f5ff'],
  chart: {
      height: 280,
      type: 'line',
      left:0,
      right:-100
  },

  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth'
  },
  xaxis: {
      type: 'datetime',
      categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"]
  },
  tooltip: {
      x: {
          format: 'dd/MM/yy HH:mm'
      },
  },
  legend: {
      show: true,
  }
};
export let ApexChartData1  : any = {
  series: [{
      name: 'New Customers',
      data: [31, 40, 78, 51, 92, 65, 90]
  }, {
      name: 'Existing customers',
      data: [50, 34, 45, 82, 34, 52, 41]
  }],
  colors: ['#266cd4', '#e5f5ff'],
  chart: {
      height: 220,
      type: 'line',
      left:0,
      right:-100
  },

  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth'
  },
  xaxis: {
      type: 'datetime',
      categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"]
  },
  tooltip: {
      x: {
          format: 'dd/MM/yy HH:mm'
      },
  },
  legend: {
      show: false,
  }
};



export let ApexChartData2  : any = {
  series: [{
      name: 'Session',
      data: [31, 35, 18, 39, 33,61]
  }, ],
  colors: [ '#e5edfa'],

  chart: {
      height: 182,
      type: 'area',
      left:'-10',
toolbar:{
enabled:false
},
      zoom: {
          enabled: false
        },
        menu: {
          enabled: false
        },

  },

  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth',

  },
  xaxis: {
      type: '',
      show:false,
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  },
  yaxis: {

      show:false,

  },

  legend: {
      show: false,
  },
  grid: {
      show: false,      // you can either change hear to disable all grids



   },
};
export let ApexChartData3  : any = {
  series: [{
      name: 'Session',
      data: [21, 25, 22, 33, 28,45,40]
  }, ],
  colors: [ '#fdeaed'],

  chart: {
      height: 182,
      type: 'area',


      zoom: {
          enabled: false
        },
        menu: {
          enabled: false
        },

  },

  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth',

  },
  xaxis: {

      show:false,
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  },
  yaxis: {

      show:false,

  },

  legend: {
      show: false,
  },
  grid: {
      show: false,      // you can either change hear to disable all grids



   },
};

export let ApexChartData4  : any = {
  series: [{
      name: 'Session',
      data: [11, 25, 18, 41, 33,61]
  }, ],
  colors: [ '#e9f6e9'],

  chart: {
      height: 182,
      type: 'area',

width:131,
      zoom: {
          enabled: false
        },
        menu: {
          enabled: false
        },

  },

  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth',

  },
  xaxis: {
      type: '',
      show:false,
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  },
  yaxis: {

      show:false,

  },

  legend: {
      show: false,
  },
  grid: {
      show: false,      // you can either change hear to disable all grids



   },
};

export let ApexChartData5  : any = {
series: [
  {
    name: "Desktops",
    data: [30, 141, 25, 130, 19, 82, 15, 91, 50]
  }
],
colors: [ '#0052cc'],

chart: {
  height: 100,
  top:200,
  width: 300,
  type: "line",
  zoom: {
    enabled: false
  }
},
dataLabels: {
    enabled: false
},
stroke: {
    curve: 'smooth',

},
xaxis: {
    type: '',
    show:false,
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

},
yaxis: {

    show:false,

},

legend: {
    show: false,
},
grid: {
    show: false,      // you can either change hear to disable all grids



 },
};
export let BarData : any = {
  series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  colors: ['#0e62df', '#0052cc'],
  chart: {
      type: 'bar',
      height: 285,

  },
  plotOptions: {
      bar: {
          Vertical: true,
          width:0.3
      }
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
    width: 1,
  },
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
  },
  legend: {
      show: false,
  }
};
export let BarData1 : any = {
series: [{
    data:  [21, 25, 22, 33, 28,45,40]
}],
colors:[ '#fdeaed'],
chart: {
  height: 182,
  type: 'area',
  left:'0',
  zoom: {
    enabled: false
  },
  menu: {
    enabled: false
  },

},

dataLabels: {
    enabled: false
},
xaxis: {
  type: '',
  show:false,
  categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
},
legend: {
    show: false,
}
};

export let StackedBarData : any = {
  series: [{
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21]
  }, {
      name: 'Striking Calf',
      data: [23, 22, 23, 22, 13, 13, 12]
  }, {
      name: 'Tank Picture',
      data: [22, 27, 21, 29, 15, 21, 20]
  }, {
      name: 'Bucket Slope',
      data: [25, 12, 19, 32, 25, 24, 10]
  }, {
      name: 'Reborn Kid',
      data: [9, 7, 5, 8, 6, 9, 4]
  }],
  colors: ['#4454c3', '#c344ff', '#4ca5d9', '#f72d66', '#5ed94c'],
  chart: {
      type: 'bar',
      height: 300,
      stacked: true,
  },
  plotOptions: {
      bar: {
          horizontal: true,
      },
  },
  stroke: {
      width: 1,
      colors: ['#fff']
  },
  xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
          formatter: function (val:any) {
              return val + "K"
          }
      }
  },
  yaxis: {
      title: {
          text: undefined
      },
  },
  tooltip: {
      y: {
          formatter: function (val:any) {
              return val + "K"
          }
      }
  },
  fill: {
      opacity: 1
  },
  legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
  }
};

export let DonutChartData: any = {
  pieseries: [44, 55, 41, 17, 15],
  colors: ['#5964ff', '#ff1a1a', '#21c44c', '#0099ff', '#ffb209'],
  chart: {
      type: 'donut',
      height: 270,
  },
  legend: {
      show: false,
  },
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              width: 200
          },
          // legend: {
          //     show: true,

          // }
      }
  }]
};
export let PieChartData: any = {
  pieseries: [44, 55, 13, 43, 22],
  colors: ['#4454c3', '#c344ff', '#4ca5d9', '#f72d66', '#5ed94c'],
  chart: {
      height: 270,
      type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  legend: {
      show: false,
  },
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              width: 200
          },
          legend: {
              show: false,
              position: 'bottom'
          }
      }
  }]
}
export let RadialBarCircleData : any = {
  pieseries: [70],
  chart: {
      height: 300,
      type: 'radialBar',
  },
  plotOptions: {
      radialBar: {
          hollow: {
              size: '70%',
          }
      },
  },
  labels: ['Sales'],
  colors: ['#5e6bca'],
  responsive: [{
      options: {
          legend: {
              show: false,
          }
      }
  }]
};
export let RadialBarCircleMultipleData : any = {
  pieseries: [44, 55, 67, 83],
  chart: {
      height: 300,
      type: 'radialBar',
  },
  colors: ['#4454c3', '#c344ff', '#4ca5d9', '#f72d66', '#5ed94c'],
  plotOptions: {
      radialBar: {
          dataLabels: {
              name: {
                  fontSize: '22px',
              },
              value: {
                  fontSize: '16px',
              },
              total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w:any) {
                      return "249"
                  }
              }
          }
      }
  },
  labels: ['data1', 'data2', 'data3', 'data4'],


};
