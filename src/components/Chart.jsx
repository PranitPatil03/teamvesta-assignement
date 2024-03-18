import { useEffect, useState } from "react";
import axios from "axios";
import Graph from "./Graph";

const Chart = () => {
  const [hotelCounts, setHotelCounts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://checkinn.co/api/v1/int/requests"
      );
      const { requests } = response.data;

      const res = getRequestCount(requests);
      setHotelCounts(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRequestCount = (data) => {
    const hotelCounts = data.reduce((counts, request) => {
      const hotelName = request.hotel.shortname;
      counts[hotelName] = (counts[hotelName] || 0) + 1;
      return counts;
    }, {});

    const hotelCountsArray = Object.entries(hotelCounts).map(
      ([hotelName, count]) => ({ hotelName, count })
    );

    return hotelCountsArray;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Graph data={hotelCounts} />
    </div>
  );
};

export default Chart;
