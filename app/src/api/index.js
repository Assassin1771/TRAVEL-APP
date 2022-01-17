import React from "react";
import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

const options = {
  params: {
    latitude: "12.91285",
    longitude: "100.87808",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
