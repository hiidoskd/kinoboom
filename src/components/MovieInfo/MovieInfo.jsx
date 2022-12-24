import { Fragment } from 'react'
import styles from './MovieInfo.module.css'

const MovieInfo = ({ movie }) => {
  return (
    <div>
      <h3>О фильме</h3>
      <div className={styles.row}>
        <div className={styles.rowItem}>Год производства</div>
        <div className={styles.rowItem}>{movie.year}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowItem}>Страна</div>
        <div className={styles.rowItem}>
          {movie.countries.map((country, idx) => (
            <Fragment key={country.name}>
              {idx ? ', ' : ''}
              {country.name}
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowItem}>Жанр</div>
        <div className={styles.rowItem}>
          {movie.genres.map((genre, idx) => (
            <Fragment key={genre.name}>
              {idx ? ', ' : ''}
              {genre.name}
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowItem}>Слоган</div>
        <div className={styles.rowItem}>{movie.slogan}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowItem}>Сборы</div>
        <div className={styles.rowItem}>
          {movie.fees.world.currency}
          {movie.fees.world.value}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowItem}>Дата премьеры</div>
        <div className={styles.rowItem}>{movie.premiere.world}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowItem}>Рейтинг</div>
        <div className={styles.rowItem}>{movie.ageRating}+</div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowItem}>Длительность</div>
        <div className={styles.rowItem}>{movie.movieLength} минут</div>
      </div>
    </div>
  )
}

export default MovieInfo
