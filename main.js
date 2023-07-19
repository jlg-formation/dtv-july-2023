(async function () {
  // recupere le repository.json
  const response = await fetch("./repositories.json");
  const json = await response.json();

  const repositories = json.items;

  const repos = repositories.map((repository) => ({
    name: repository.name,
    stars: repository.stargazers_count,
  }));

  var chartDom = document.querySelector("div.diagram");
  if (chartDom === null) {
    throw new Error("div.diagram not found");
  }
  var myChart = echarts.init(chartDom, "vintage");
  var option = {
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: repos.map((r) => r.name).reverse(),
    },
    series: [
      {
        data: repos.map((r) => r.stars).reverse(),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  myChart.setOption(option);
})();
