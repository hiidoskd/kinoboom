import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './MovieRoom.module.css'

const MovieRoom = () => {
  const { id } = useParams()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://kinobd.ru/js/player_.js'
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])
  return (
    <section className={styles.content}>
      <div className={styles.left}>
        <div className={styles.videoContainer}>
          <div
            className={styles.video}
            id="kinobd"
            data-resize="1"
            data-bg="#000"
            data-kinopoisk={id}
          />
        </div>
      </div>
    </section>
  )
}

export default MovieRoom
