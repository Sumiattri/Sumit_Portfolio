import { useCallback } from "react";

export const useSound = (src, volume = 1.0) => {
  const play = useCallback(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  }, [src, volume]);

  return play;
};

// import { useCallback, useRef } from "react";
// import { useTheme } from "../context/ThemeContext";

// export const useSound = (src, volume = 1.0) => {
//   const { isSoundOn } = useTheme();
//   const audioRef = useRef(null);

//   const play = useCallback(() => {
//     if (!isSoundOn) return;

//     // Reuse existing audio element if it exists
//     if (!audioRef.current) {
//       audioRef.current = new Audio(src);
//       audioRef.current.volume = volume;
//     }
//     audioRef.current.currentTime = 0;
//     audioRef.current.play();
//   }, [src, volume, isSoundOn]);

//   const stop = useCallback(() => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   }, []);

//   return { play, stop };
// };
