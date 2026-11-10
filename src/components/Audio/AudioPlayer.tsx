import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { PlayPauseButton } from "../PlayPauseButton";

interface IAudioPlayer {
  audioSrc: string;
  title?: string;
  credit?: string;
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

  const { audioSrc, title, credit } = props;
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [playing, setPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-4 py-5">
      <PlayPauseButton
        isPlaying={playing}
        isLoading={isLoading}
        onPlayPause={handlePlayPause}
        size="sm"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-4">
          {title && <p className="text-fg leading-snug">{title}</p>}
          <span className="shrink-0 text-xs text-subtle tabular-nums">
            {playing || currentTime > 0
              ? `${formatTime(currentTime)} / ${formatTime(duration)}`
              : formatTime(duration)}
          </span>
        </div>
        {credit && <p className="text-xs text-subtle mt-0.5">{credit}</p>}

        {/* Progress – taller hit area around a hairline bar */}
        <div
          className="group/progress py-2 -my-1 mt-2 cursor-pointer"
          onClick={handleSeek}
          role="presentation"
        >
          <div className="h-[3px] bg-line rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-primary-400 transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <a
        href={audioSrc}
        download
        aria-label={title ? `${title} herunterladen` : "Herunterladen"}
        className="shrink-0 p-2 -mr-2 text-subtle hover:text-fg transition-colors duration-200"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M4.5 19.5h15"
          />
        </svg>
      </a>
    </div>
  );
});

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
