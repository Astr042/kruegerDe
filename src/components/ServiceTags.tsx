import React from "react";

interface ServiceTagsProps {
  className?: string;
  justify?: "center" | "start";
}

export const ServiceTags: React.FC<ServiceTagsProps> = ({
  className = "",
  justify = "center",
}) => {
  const justifyClass =
    justify === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex flex-wrap ${justifyClass} gap-3 ${className}`}>
      <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
        Synchronsprecher
      </span>
      <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
        Hörbuchsprecher
      </span>
      <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
        Werbung & Podcast
      </span>
      <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/20">
        Hörspiele
      </span>
    </div>
  );
};
