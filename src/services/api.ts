import axios, { HeadersDefaults } from "axios";

type AuthorizationHeaders = HeadersDefaults & { autorization: string };

const baseURL = "http://localhost:8080/";

const api = axios.create({
  baseURL,
});

export default api;
