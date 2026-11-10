import React from "react";

interface ServiceTagsProps {
  className?: string;
  justify?: "center" | "start";
}

const services = [
  "Synchronsprecher",
  "Hörbuchsprecher",
  "Werbung & Podcast",
  "Hörspiele",
];

export const ServiceTags: React.FC<ServiceTagsProps> = ({
  className = "",
  justify = "center",
}) => {
  const justifyClass =
    justify === "center" ? "justify-center" : "justify-start";

  return (
    <ul
      className={`flex flex-wrap ${justifyClass} gap-x-5 gap-y-1.5 text-sm text-muted ${className}`}
    >
      {services.map((service) => (
        <li key={service} className="flex items-center gap-2">
          <span
            className="w-1 h-1 rounded-full bg-brand-primary-400/70"
            aria-hidden="true"
          />
          {service}
        </li>
      ))}
    </ul>
  );
};
