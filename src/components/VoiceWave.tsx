import React from "react";

interface VoiceWaveProps {
  className?: string;
  justify?: "center" | "start";
  /** Height of the wave in rem */
  size?: number;
}

export const VoiceWave: React.FC<VoiceWaveProps> = ({
  className = "",
  justify = "center",
  size = 2,
}) => {
  const justifyClass =
    justify === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex ${justifyClass} ${className}`} aria-hidden="true">
      <div className="wave-animation" style={{ height: `${size}rem` }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="wave-bar" />
        ))}
      </div>
    </div>
  );
};
