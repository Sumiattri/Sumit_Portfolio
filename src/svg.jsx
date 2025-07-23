import React from "react";
import useSound from "use-sound";

import styles from "./PopsDemo.module.css";

const ARROW_DELAY = 125;
const SOUND_URL = "/sounds/rising-pops.mp3";

function PopsDemo() {
  const [isHovering, setIsHovering] = React.useState(false);
  const [play, { stop }] = useSound(SOUND_URL, { volume: 0.5 });

  return (
    <button
      className={styles.btn}
      onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}
    >
      Hover over me!
      <svg
        width="36"
        height="12"
        viewBox="0 0 36 12"
        fill="none"
        className={styles.arrowSvg}
      >
        <path
          d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
          stroke="var(--color-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: true ? 1 : 0,
            transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms`,
          }}
        />

        <path
          d="M15 10L19.5 5.5L15 1"
          stroke="var(--color-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms`,
          }}
        />
        <path
          d="M23 10L27.5 5.5L23 1"
          stroke="var(--color-primary)"
          strokeOpacity="0.66"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: `opacity ${
              isHovering ? 0 : ARROW_DELAY
            }ms ${ARROW_DELAY}ms`,
          }}
        />
        <path
          d="M31 10L35.5 5.5L31 1"
          stroke="var(--color-primary)"
          strokeOpacity="0.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms ${
              ARROW_DELAY * 2
            }ms`,
          }}
        />
      </svg>
    </button>
  );
}

export default PopsDemo;
