import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: (builder) => ({
        getAllEmployees: builder.query({
            query: (page = 1) => `/employee?page=${page}`,
            providesTags: ['Employee']
        }),
        getEmployeeById: builder.query({
            query: (postId) => '/employee/' + postId,
            providesTags: ['Employee']
        }),
        createEmployee: builder.mutation({
            query: (employee) => ({
                body: employee,
                method: 'POST',
                url: '/employee/create_employee',
            }),
            invalidatesTags: ['Employee']
        }),
        updateEmployee: builder.mutation({
            query: (employee) => ({
                body: employee,
                method: 'PUT',
                url: `/employee/update_employee/${employee._id}`,
            }),
            invalidatesTags: ['Employee']
        }),
        deleteEmployee: builder.mutation({
            query: ({id}) => ({
                body: id,
                method: 'DELETE',
                url: `/employee/delete_employee/${id}`,
            }),
            invalidatesTags: ['Employee']
        }),
    }),
});

export const {
    useGetAllEmployeesQuery,
    useGetEmployeeByIdQuery,
    useCreateEmployeeMutation,
    useDeleteEmployeeMutation,
    useUpdateEmployeeMutation,
} = employeeApi;