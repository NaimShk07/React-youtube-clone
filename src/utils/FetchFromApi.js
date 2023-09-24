
import axios from "axios";

const base_url = "https://youtube-v31.p.rapidapi.com/";

const options = {
   // method: "GET",
   params: {
      maxResults: "50",
   },
   headers: {
      "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
   },
};

export const fetchData = async (url) => {
   const { data } = await axios.get(`${base_url}${url}`, options);
   return data;
};