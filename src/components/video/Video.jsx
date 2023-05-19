import { useState } from 'react';

import { Play } from '../play/Play';
import styles from './video.module.css';

export function Video() {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };
  
  return (
    <article className={styles.video__article__container}
      onClick={handlePlayVideo}
    >
      <figure>
        <video src="/src/assets/del.MP4" controls autoPlay={playVideo}></video>
      </figure>
      {
        !playVideo && (
          <div className={styles.video}>
            <Play />
            <div className={styles.video__line__right__bottom}></div>
            <div className={styles.video__line__left__bottom}></div>
          </div>
        )
      }
    </article>
  );
}
