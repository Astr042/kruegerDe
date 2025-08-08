import React from "react";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  onPlayPause: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "gradient" | "solid";
  className?: string;
}

export const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  isPlaying,
  isLoading,
  onPlayPause,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "p-1.5 sm:p-2",
    md: "p-2 sm:p-3",
    lg: "p-3 sm:p-4",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4 sm:w-5 sm:h-5",
    md: "w-5 h-5 sm:w-6 sm:h-6",
    lg: "w-6 h-6 sm:w-7 sm:h-7",
  };

  const spinnerSizeClasses = {
    sm: "w-4 h-4 sm:w-5 sm:h-5",
    md: "w-5 h-5 sm:w-6 sm:h-6",
    lg: "w-6 h-6 sm:w-7 sm:h-7",
  };

  return (
    <button
      onClick={onPlayPause}
      disabled={isLoading}
      className={`${sizeClasses[size]} bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-brand-primary-500/25 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? (
        <div
          className={`${spinnerSizeClasses[size]} border-2 border-white border-t-transparent rounded-full animate-spin`}
        ></div>
      ) : isPlaying ? (
        <svg
          className={iconSizeClasses[size]}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className={iconSizeClasses[size]}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};
