/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

const Graph = ({ data }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      const requests = data.map((item) => item.count);

      const options = {
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
        series: [{ name: "Requests", type: "line", data: requests }],
        stroke: { curve: "straight", width: [7, 7] },
        plotOptions: { bar: { columnWidth: "20%" } },
        xaxis: {
          categories: [
            "Seaside Resort",
            "Mountain View Inn",
            "Urban Retreat",
            "Lakeside BnB",
          ],
        },
        yaxis: {
          min: 0,
          max: 8,
          axisTicks: { show: false, color: "#fff" },
          axisBorder: { show: false, color: "#fff" },
          labels: { style: { colors: "#808080" } },
          title: { style: { color: "#247BA0" } },
        },
        tooltip: {
          enabled: true,
          shared: true,
          followCursor: true,
          hideEmptySeries: true,
          x: { show: true },
          y: { show: true },
        },
        legend: { horizontalAlign: "left", offsetX: 40 },
      };

      if (chartInstance) {
        chartInstance.updateOptions({ series: [{ data: requests }] });
      } else {
        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
        setChartInstance(chart);
      }
    }
  }, [data, chartInstance]);

  return (
    <div ref={chartRef} id="chart">
      <Chart options={{}} series={[]} type="line" height={550} />
    </div>
  );
};

export default Graph;
