/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

interface IAudioPlayer {
  audioSrc: string;
  rounded?: boolean;
}

export type AudioPlayerRef = {
  playPauseHandler: () => void;
};

const AudioPlayer = forwardRef<AudioPlayerRef, IAudioPlayer>((props, ref) => {
  useImperativeHandle(ref, () => ({
    playPauseHandler() {
      if (!audio) return;
      audio.pause();
      setPlaying(false);
    },
  }));

  const { audioSrc, rounded } = props;
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [playing, setPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(100);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const audioElement = new Audio(audioSrc);
    audioElement.addEventListener("loadedmetadata", () => {
      setDuration(audioElement.duration);
      setIsLoading(false);
    });
    audioElement.addEventListener("loadstart", () => setIsLoading(true));
    setAudio(audioElement);

    return () => {
      audioElement.pause();
      audioElement.src = "";
    };
  }, [audioSrc]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (playing && audio) {
      interval = setInterval(() => {
        setCurrentTime(audio.currentTime);
        if (audio.ended) {
          setPlaying(false);
          audio.currentTime = 0;
          setCurrentTime(0);
        }
      }, 100);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [playing, audio]);

  const handlePlayPause = () => {
    if (!audio) return;
    setIsLoading(true);

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio
          .play()
          .then(() => {
            setPlaying(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
          });
      }
    } catch (error) {
      console.error("Audio control error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume / 100;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 backdrop-blur-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/30 ${
        rounded ? "rounded-2xl" : ""
      }`}
    >
      {/* Waveform visualization background */}
      {/* <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="flex items-center justify-center h-full space-x-1">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-orange-500 to-pink-500 rounded-full transition-all duration-1000"
              style={{
                height: `${playing ? Math.random() * 60 + 60 : 20}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div> */}
      <div className="relative z-10">
        {/* Progress Bar */}
        <div className="mb-6">
          <div
            className="w-full h-3 bg-slate-700 rounded-full cursor-pointer group/progress"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full relative transition-all duration-150 group-hover/progress:shadow-lg group-hover/progress:shadow-orange-500/50"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200"></div>
            </div>
          </div>

          {/* Time Display */}
          <div className="flex justify-between text-sm text-slate-400 mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Skip Backward */}
            <button
              onClick={() => {
                if (audio) {
                  audio.currentTime = Math.max(0, audio.currentTime - 10);
                }
              }}
              className="p-1 sm:p-2 text-slate-400 hover:text-orange-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              disabled={isLoading}
              className="p-2 sm:p-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : playing ? (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
                  className="w-5 h-5 sm:w-6 sm:h-6"
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

            {/* Skip Forward */}
            <button
              onClick={() => {
                if (audio) {
                  audio.currentTime = Math.min(
                    duration,
                    audio.currentTime + 10
                  );
                }
              }}
              className="p-1 sm:p-2 text-slate-400 hover:text-orange-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zm6 0a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.787L4.768 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.768l3.615-3.787a1 1 0 011.617.787zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.972 7.972 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-12 sm:w-20 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Download Button */}
          <a
            href={audioSrc}
            download
            className="p-1 sm:p-2 text-slate-400 hover:text-orange-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
});

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
