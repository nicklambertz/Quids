import React, { useEffect, useRef } from "react";
import { useMusic } from "./MusicContext";

const BackgroundMusic = () => {
  const { isPlaying } = useMusic();
  const audioRef = useRef(new Audio("./assets/audio/kids-background-song.mp3"));

  useEffect(() => {
    audioRef.current.loop = true;
    if (isPlaying) {
      audioRef.current
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return null;
};

export default BackgroundMusic;
