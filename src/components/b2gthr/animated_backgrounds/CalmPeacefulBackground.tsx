import React from "react";
import { AnimatedBackgroundProps } from ".";

export const CalmPeacefulBackground: React.FC<AnimatedBackgroundProps> = ({
  className = "",
  transitionProgress = 1,
  previousMoodIndex,
}) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full -z-10 transition-opacity duration-700 ${className}`}
      style={{
        opacity: transitionProgress,
        background: "linear-gradient(to bottom, #88a2bc, #a8c2dc)",
      }}
    />
  );
};
