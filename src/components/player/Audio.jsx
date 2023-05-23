import { Player } from './Player';

import { useRef, useState, useEffect } from 'react';

export function Audio ({ song, isPlaying }) {
  const [currentSong, setCurrentSong] = useState({ song });

  const audioElem = useRef();
  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    let leftTime = Number(audioElem.current.duration).toFixed() - Number(audioElem.current.currentTime).toFixed();
    let seconds = leftTime % 60;
    let minutes = Math.floor( leftTime / 60) % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    leftTime = `${minutes}:${seconds}`;

    setCurrentSong({ ...currentSong, 'progress': ct / duration * 100, 'length': duration, leftTime });
  };

  return (
    <div>
      <audio src={currentSong.song} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player audioElem={audioElem} currentSong={currentSong} />
    </div>
  );
}
