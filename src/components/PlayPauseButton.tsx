import React from "react";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  onPlayPause: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-9 h-9",
  md: "w-11 h-11",
  lg: "w-16 h-16",
};

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-7 h-7",
};

export const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  isPlaying,
  isLoading,
  onPlayPause,
  size = "md",
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onPlayPause}
      disabled={isLoading}
      aria-label={isPlaying ? "Pause" : "Abspielen"}
      className={`${sizeClasses[size]} shrink-0 inline-flex items-center justify-center rounded-full bg-brand-primary-400 text-canvas hover:bg-brand-primary-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? (
        <span
          className={`${iconSizeClasses[size]} border-2 border-canvas border-t-transparent rounded-full animate-spin`}
        />
      ) : isPlaying ? (
        <svg
          className={iconSizeClasses[size]}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        <svg
          className={iconSizeClasses[size]}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6.5 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L8.02 4.29A1 1 0 0 0 6.5 5.14Z" />
        </svg>
      )}
    </button>
  );
};
