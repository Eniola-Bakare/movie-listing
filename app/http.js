import axios from "axios";

const axioxinstance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    "Content-Type": "application/json}",
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default axioxinstance;
