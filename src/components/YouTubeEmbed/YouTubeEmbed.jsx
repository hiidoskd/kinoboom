import React from 'react'
import styles from './YouTubeEmbed.module.css'
const YouTubeEmbed = ({ embedUrl }) => (
  <div className={styles.videoResponsive}>
    <iframe
      width="300"
      height="225"
      src={embedUrl}
      frameBorder="0"
      allowFullScreen
      title="Trailer"
    />
  </div>
)

export default YouTubeEmbed
