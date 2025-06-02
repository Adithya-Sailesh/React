
  import baseApi from "../api";
    import type { employeeResponse, empRequest, empResponse } from "./types";
    // import type { LoginPayload, LoginResponse } from "./types";
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
        editemployee:builder.mutation<void,{id:number,payload:empRequest}>({
          query:({payload,id})=>({
            url:`/employee/${id}`,
            method :"PUT",
            body:payload,
          }),
          invalidatesTags: ['EMPLOYEES', 'EMPLOYEE_DETAILS']
        }),
        deleteemployee:builder.mutation<empResponse,{id:number}>({
          query:({id})=>({
            url:`/employee/${id}`,
            method :"DELETE"
          })
        })
    }),
  });

  export const { useGetEmployeeListQuery ,useGetEmployeeQuery,useCreateemployeeMutation,useEditemployeeMutation,useDeleteemployeeMutation} = employeeApi;