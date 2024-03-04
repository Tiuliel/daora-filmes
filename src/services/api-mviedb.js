import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { api, apiKey };
