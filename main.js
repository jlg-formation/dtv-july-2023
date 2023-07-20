(async function () {
  const generateData = () => {
    const array = [];
    for (let i = 0; i < 10000; i++) {
      const item = [Math.random(), Math.random()];
      array.push(item);
    }
    return array;
  };
  const data = generateData();
  var chartDom = document.querySelector("div.diagram");
  if (chartDom === null) {
    throw new Error("div.diagram not found");
  }
  var myChart = echarts.init(chartDom, "vintage");
  var option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 5,
        data: data,
        type: "scatter",
      },
    ],
  };

  myChart.setOption(option);
})();
