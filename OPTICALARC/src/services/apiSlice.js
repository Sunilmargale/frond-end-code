import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";


export const apiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://carresell-production.up.railway.app",
    prepareHeaders: (headers, { getState }) => {
      
      const token =  Cookies.get('token')
      
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

 
  tagTypes: ["User", "Admin", "Dealer", "CAR"],
  endpoints: (builder) => ({}),
  
});

