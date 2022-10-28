import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://api.kinopoisk.dev'
const API_KEY = 'ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getMovies: builder.query({
      query: () =>
        `movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`
    })
  })
})

export const { useGetMoviesQuery } = apiSlice
