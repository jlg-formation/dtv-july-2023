(async function () {
  // recupere le repository.json
  const response = await fetch(
    "https://api.github.com/search/repositories?q=stars%3A%3E10000+data-visualization&sort=stars&order=desc"
  );
  const json = await response.json();

  const repositories = json.items;

  const filterRepos = repositories.filter(
    (repo) =>
      ![
        "GitHub-Chinese-Top-Charts",
        "helm",
        "data-science",
        "umami",
        "tui.editor",
        "charts",
        "analytics",
        "sampler",
        "netdata",
        "pixijs",
        "metabase",
        "directus",
      ].includes(repo.name)
  );

  const repos = filterRepos.map((repository) => ({
    name: repository.full_name,
    stars: repository.stargazers_count,
  }));
  console.log("repos: ", repos);

  var chartDom = document.querySelector("div.diagram");
  if (chartDom === null) {
    throw new Error("div.diagram not found");
  }
  var myChart = echarts.init(chartDom, "vintage");
  var option = {
    grid: {
      top: 10,
      bottom: 50,
      left: 200,
      right: 30,
    },
    axisLabel: {
      color: "black",
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: repos.map((r) => r.name).reverse(),
      axisLabel: {
        show: true,
        fontSize: 15,
      },
    },
    series: [
      {
        data: repos.map((r) => r.stars).reverse(),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        label: {
          show: true,
          precision: 1,
          position: "right",
          fontFamily: "monospace",
          color: "black",
          fontWeight: "bold",
        },
      },
    ],
  };

  myChart.setOption(option);
})();
