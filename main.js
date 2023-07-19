import * as echarts from "./node_modules/echarts/dist/echarts.esm.js";

var chartDom = document.querySelector("div.diagram");
if (chartDom === null) {
  throw new Error("div.diagram not found");
}
var myChart = echarts.init(chartDom);
var option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};

myChart.setOption(option);
