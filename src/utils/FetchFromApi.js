
import axios from "axios";

// const base_url = "https://youtube138.p.rapidapi.com/";
const base_url = "https://youtube-v31.p.rapidapi.com/";

const options = {
   // method: "GET",
   params: {
      maxResults: "50",
   },
   headers: {
      "X-RapidAPI-Key": "58b020fd77msh75a9f4c1c5a8f87p171966jsn7cc42b52007c",
      // "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
   },
};

export const fetchData = async (url) => {
   const { data } = await axios.get(`${base_url}${url}`, options);
   return data;
};