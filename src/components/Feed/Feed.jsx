import { useGetMoviesQuery } from '../../api/apiSlice'

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
    content = JSON.stringify(movies)
  }

  return (
    <div>
      <h1>Feed</h1>
      {content}
    </div>
  )
}

export default Feed
