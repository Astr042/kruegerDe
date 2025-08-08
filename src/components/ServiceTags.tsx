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
      <span className="px-4 py-2 bg-brand-primary-500/20 text-brand-primary-300 rounded-full text-sm font-medium border border-brand-primary-500/30">
        Synchronsprecher
      </span>
      <span className="px-4 py-2 bg-brand-secondary-500/20 text-brand-secondary-300 rounded-full text-sm font-medium border border-brand-secondary-500/30">
        Hörbuchsprecher
      </span>
      <span className="px-4 py-2 bg-brand-accent-emerald-500/20 text-brand-accent-emerald-300 rounded-full text-sm font-medium border border-brand-accent-emerald-500/30">
        Werbung & Podcast
      </span>
      <span className="px-4 py-2 bg-brand-accent-teal-500/20 text-brand-accent-teal-300 rounded-full text-sm font-medium border border-brand-accent-teal-500/20">
        Hörspiele
      </span>
    </div>
  );
};
