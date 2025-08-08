import React from "react";

interface VoiceWaveProps {
  className?: string;
  justify?: "center" | "start";
}

export const VoiceWave: React.FC<VoiceWaveProps> = ({
  className = "",
  justify = "center",
}) => {
  const justifyClass =
    justify === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex ${justifyClass} ${className}`}>
      <div className="wave-animation">
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>
    </div>
  );
};
