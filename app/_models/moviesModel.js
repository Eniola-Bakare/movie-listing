import axios from "../http";

export async function listMovies(type, params) {
  return axios.get(`/${type}/movie`, { params });
}
