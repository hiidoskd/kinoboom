import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getMovies: builder.query({
      query: () =>
        `movie?field=rating.kp&search=7-10&field=year&search=2012-2020&field=typeNumber&search=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`
    }),
    getMovieById: builder.query({
      query: id => `movie?field=id&search=${id}&token=${API_KEY}`
    })
  })
})

export const { useGetMoviesQuery, useGetMovieByIdQuery } = apiSlice
