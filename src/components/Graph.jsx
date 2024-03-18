/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

const Graph = ({ data }) => {
  const chartRef = useRef(null);
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const requests = data.map((item) => item.count);

    setSeriesData(requests);
  }, [data]);

  useEffect(() => {
    if (seriesData.length > 0) {
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
        series: [{ name: "Requests", type: "line", data: seriesData }],
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

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [seriesData]);

  return (
    <div ref={chartRef} id="chart" className="">
      <Chart
        options={{}}
        series={seriesData.length > 0 ? [{ data: seriesData }] : []}
        type="line"
        height={550}
      />
    </div>
  );
};

export default Graph;
