import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import MovieItem from '../MovieItem/MovieItem'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
}

const MovieList = ({ movies, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
        >
          {movies.docs.map(movie => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default MovieList
