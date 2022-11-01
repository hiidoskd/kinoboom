import { useGetMoviesQuery } from '../../api/apiSlice'
import MovieList from '../MovieList/MovieList'

const Feed = () => {
  const {
    data: movies,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetMoviesQuery()

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = <MovieList movies={movies} title={'Рекомендуемые фильмы'} />
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>
  }

  return <main>{content}</main>
}

export default Feed
