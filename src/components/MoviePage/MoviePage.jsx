import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../../api/apiSlice'
import styles from './MoviePage.module.css'

const MoviePage = () => {
  const { id } = useParams()
  const {
    data: movie,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetMovieByIdQuery(id)
  let content
  if (isLoading) {
    content = <p>Loading...</p>
  }
  if (isSuccess) {
    console.log(movie)
    content = (
      <div>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.mainContent}>
              <div className={styles.leftColumn}>
                <div className={styles.poster}>
                  <img src={movie.poster.previewUrl} />
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.mainInfo}>
                  <div className={styles.infoLeft}>
                    <h1>
                      {movie.name} ({movie.year})
                    </h1>
                    <h2>{movie.alternativeName}</h2>
                    <p>{movie.shortDescription}</p>
                    <div className={styles.buttonGroup}>
                      <button>Смотреть</button>
                      <button>Буду смотреть</button>
                      <button>...</button>
                    </div>
                    <div className={styles.generalInfo}>
                      <h3>О фильме</h3>
                      <div>
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
                          <div className={styles.rowItem}>
                            {movie.premiere.world}
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.rowItem}>Рейтинг</div>
                          <div className={styles.rowItem}>
                            {movie.ageRating}+
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.rowItem}>Длительность</div>
                          <div className={styles.rowItem}>
                            {movie.movieLength} минут
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.infoRight}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return content
}

export default MoviePage
