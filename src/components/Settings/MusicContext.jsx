import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("./assets/audio/kids-background-song.mp3"));

  useEffect(() => {
    audioRef.current.loop = true;
    const playMusic = async () => {
      try {
        await audioRef.current.play();
        console.log("Audio is playing");
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };
    if (isPlaying) {
      playMusic();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying]);

  useEffect(() => {
    const playMusic = async () => {
      try {
        await audioRef.current.play();
        console.log("Audio is playing");
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };
    playMusic();
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
