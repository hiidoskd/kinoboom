import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../../api/apiSlice'
import MovieInfo from '../MovieInfo/MovieInfo'
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed'
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
                  <img src={movie.poster.previewUrl} alt="poster" width="300" />
                </div>
                <YouTubeEmbed embedUrl={movie?.videos?.trailers[0]?.url} />
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
                    <MovieInfo movie={movie} />
                  </div>
                  <div className={styles.infoRight}></div>
                </div>
              </div>
            </div>
            <div className={styles.tabs}></div>
          </div>
        </div>
      </div>
    )
  }
  return content
}

export default MoviePage
