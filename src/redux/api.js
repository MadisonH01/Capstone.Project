import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["Product", "User"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      providesTags: ["User"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      providesTags: ["User"],
    }),
    getUserCart: builder.query({
      query: (token) => ({
        url: `/carts/user/${id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: ({ id, token }) => ({
        url: `/products/${id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Product"],
    }),
    getUser: builder.query({
      query: (token) => ({
        url: `/users/${id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
    AddProductToCart: builder.mutation({
      query: (body) => ({
        url: "/carts",
        method: "POST",
        body,
      }),
      providesTags: ["Product"]
    }),
    updateCart: builder.mutation({
      query: (body) => ({
        url: `/carts/${id}`,
        method: "PUT",
        body,
      }),
      providesTags: ["Product"]
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users"
      }),
    }),
    getAllCategories: 
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProductByIdQuery,
  useGetUserCartQuery,
  useGetUserQuery,
  useGetProductsQuery,
  useAddProductToCartMutation,
  useUpdateCartMutation,
  useGetAllUsersQuery,
} = api;
