import { Link } from 'react-router-dom'
import styles from './MovieItem.module.css'

const MovieItem = ({ movie }) => {
  return (
    <div key={movie.id} className={styles.item}>
      <Link to={`/movie/${movie.id}`} className={styles.imageContainer}>
        <img
          src={movie.poster.previewUrl}
          className={styles.image}
          alt={movie.description}
        />
      </Link>
      <Link to={`/movie/${movie.id}`} className={styles.title}>
        {movie.name}
      </Link>
      <p>{movie.year}, фильм</p>
    </div>
  )
}

export default MovieItem
