
  import baseApi from "../api";
    import type { deleteResponse, editResponse, employeeResponse, empRequest, empResponse } from "./types";
    export const employeeApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
        getEmployeeList: builder.query({
          query: () => '/employee',
          providesTags: ['EMPLOYEES']
          }),
        getEmployee: builder.query<employeeResponse,{id:number}>({
          query: ({id}) => `/employee/${id}`,
        providesTags: ['EMPLOYEE_DETAILS']
        }),
        createemployee:builder.mutation<empRequest,empResponse>({
          query:(payload)=>({
            url:"/employee",
            method :"POST",
            body:payload
          }),
          invalidatesTags: ['EMPLOYEES'],
        }),
        editemployee:builder.mutation<editResponse,{id:number,payload:empRequest}>({
          query:({payload,id})=>({
            url:`/employee/${id}`,
            method :"PUT",
            body:payload,
          }),
          invalidatesTags: ['EMPLOYEES', 'EMPLOYEE_DETAILS']
        }),
        deleteemployee:builder.mutation<deleteResponse,{id:number}>({
          query:({id})=>({
            url:`/employee/${id}`,
            method :"DELETE"
          }),
          invalidatesTags: ['EMPLOYEES', 'EMPLOYEE_DETAILS']
        })
    }),
  });

  export const { useGetEmployeeListQuery ,useGetEmployeeQuery,useCreateemployeeMutation,useEditemployeeMutation,useDeleteemployeeMutation} = employeeApi;