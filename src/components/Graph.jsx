import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

const Graph = ({}) => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    colors: ["#41A1FC"],
    series: [
      {
        name: "Series A",
        type: "line",
        //todo
        // number of requets
        data: [0, 2, 4, 6, 8],
      },
    ],
    stroke: {
      curve: "straight",
      width: [7, 7],
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      //todo - apis data here
      // hotel --> shortname
      categories: [2009, 2010, 2011, 2012, 2013],
    },
    yaxis: [
      {
        min: 0,
        max: 8,
        axisTicks: {
          show: false,
          color: "#fff",
        },
        axisBorder: {
          show: false,
          color: "#fff",
        },
        labels: {
          style: {
            colors: "#808080",
          },
        },
        title: {
          style: {
            color: "#247BA0",
          },
        },
      },
    ],
    tooltip: {
      enabled: true,
      shared: true,
      followCursor: true,
      hideEmptySeries: true,
      x: {
        show: true,
      },
      y: {
        show: true,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  });

  useEffect(() => {
    const chart = new ApexCharts(
      document.querySelector("#chart"),
      chartOptions
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [chartOptions]);

  return (
    <div id="chart" className="">
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={550}
      />
    </div>
  );
};

export default Graph;
