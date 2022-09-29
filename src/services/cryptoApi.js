import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "49bd1e1488msh1f654107e15f6bap1edd74jsnc78360cb2d08",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.coms";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "crypto",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});
