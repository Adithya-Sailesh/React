import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ['EMPLOYEES', 'EMPLOYEE_DETAILS'],
  baseQuery: fetchBaseQuery({
  	baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
    	// Retrieve the token from the state (assuming it's stored in the auth slice)
    	const token = localStorage.getItem("token");
    	console.log("token", token);
    	// If a token exists, add it to the headers
    	if (token) {
      		headers.set("Authorization", `Bearer ${token}`);
    	}
    	return headers;
  	},
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

export default baseApi;
