import { useEffect } from "react";
import axios from "axios";
import Graph from "./Graph";

const Chart = () => {
  const fetchData = async () => {
    const data = await axios.get("https://checkinn.co/api/v1/int/requests");

    const { requests } = data.data;

    console.log(requests);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <Graph></Graph>
    </div>
  );
};

export default Chart;
