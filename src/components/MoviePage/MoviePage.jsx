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
        {' '}
        <div class={styles.container}>
          <div class={styles.main}>
            <div class={styles.background}>
              <img
                src={movie.backdrop.previewUrl}
                class={styles.backgroundImage}
              />
            </div>
            <div class={styles.mainContent}>
              <div class={styles.leftColumn}>
                <div class={styles.poster}>
                  <img src={movie.poster.previewUrl} />
                </div>
              </div>
              <div class={styles.rightColumn}>
                <div class={styles.mainInfo}>
                  <div class={styles.infoLeft}>
                    <h1>
                      {movie.name} ({movie.year})
                    </h1>
                    <h2>{movie.alternativeName}</h2>
                    <p>{movie.shortDescription}</p>
                    <div class={styles.buttonGroup}>
                      <button>Смотреть</button>
                      <button>Буду смотреть</button>
                      <button>...</button>
                    </div>
                    <div class={styles.generalInfo}>
                      <h3>О фильме</h3>
                      <div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Год производства</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Страна</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Жанр</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Слоган</div>
                          <div class={styles.rowItem}>{movie.slogan}</div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Режиссер</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Сценарий</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Продюсер</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Оператор</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Композитор</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Художник</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Монтаж</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Бюджет</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Сборы</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Дата премьеры</div>
                          <div class={styles.rowItemSecond}>
                            <Link to="#">{movie.year}</Link>
                          </div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Рейтинг</div>
                          <div class={styles.rowItem}>{movie.ageRating}+</div>
                        </div>
                        <div class={styles.row}>
                          <div class={styles.rowItem}>Длительность</div>
                          <div class={styles.rowItem}>
                            {movie.movieLength} минут
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class={styles.infoRight}></div>
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
