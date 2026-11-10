import React from "react";

interface MailtoLinkProps {
  email: string;
  className?: string;
  variant?: "header" | "footer";
}

export const MailtoLink: React.FC<MailtoLinkProps> = ({
  email,
  className = "",
  variant = "footer",
}) => {
  const variantClasses = {
    header: "text-sm text-muted hover:text-fg",
    footer:
      "font-display text-2xl sm:text-3xl text-fg underline decoration-line-strong decoration-1 underline-offset-[6px] hover:decoration-brand-primary-400",
  };

  return (
    <a
      href={`mailto:${email}`}
      className={`group inline-flex items-center gap-2 transition-colors duration-200 ${variantClasses[variant]} ${className}`}
    >
      {variant === "header" && (
        <svg
          className="w-4 h-4 text-subtle group-hover:text-brand-primary-400 transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      )}
      <span>{email}</span>
    </a>
  );
};
