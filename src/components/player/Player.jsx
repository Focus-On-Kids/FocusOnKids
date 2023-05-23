import { useRef } from 'react';

import styles from './player.module.css';

export function Player ({ audioElem, currentSong }) {
  const clickRef = useRef();
  // const duration = audioElem.current.duration;

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;
  };

  return (
    <div className={styles.player}>
      <div className={styles.player__container}>
        <div className={styles.navigation}>
          <div className={styles.navigation__wrapper} onClick={checkWidth} ref={clickRef}>
            <div className={styles.seek__bar} style={{ width: `${currentSong.progress}%` }}></div>
            <div className={styles.seek__bar__dot} style={{ left: `calc(${currentSong.progress}% - 5px)` }}></div>
          </div>
        </div>
      </div>
      <div className={styles.player__duration}>{currentSong.leftTime}</div>
    </div>
  
  );
}
