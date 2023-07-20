(async function () {
  var chartDom = document.querySelector("div.diagram");
  if (chartDom === null) {
    throw new Error("div.diagram not found");
  }
  var myChart = echarts.init(chartDom);

  myChart.showLoading();
  const response = await fetch("./chezmoi.json");
  const json = await response.json();

  myChart.hideLoading();
  echarts.registerMap("chezmoi", json);
  var option = {
    title: {
      text: "USA Population Estimates (2012)",
      subtext: "Data from www.census.gov",
      sublink: "http://www.census.gov/popest/data/datasets.html",
      left: "right",
    },
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
    },
    series: [
      {
        name: "USA PopEstimates",
        type: "map",
        roam: true,
        map: "chezmoi",
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [],
      },
    ],
  };
  myChart.setOption(option);
})();
