import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const SmoothAnimation = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const animationProps = useSpring({
    opacity: clicked ? 1 : 0,
    transform: clicked ? "translateX(0)" : "translateX(-100%)",
  });

  return (
    <div>
      <h1 onClick={handleClick}>Направления</h1>
      <h1 onClick={handleClick}>Индустрии</h1>
      <animated.div
        style={{
          width: "100px",
          height: "100px",
          background: "blue",
          margin: "20px",
          ...animationProps,
        }}
      />
    </div>
  );
};

export default SmoothAnimation;
