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
  const baseClasses =
    "group inline-flex items-center transition-all duration-300";

  const variantClasses = {
    header:
      "bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 justify-center text-slate-200 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-slate-700/80 border border-slate-600/50",
    footer:
      "gap-3 bg-slate-800/50 hover:bg-slate-700/50 px-6 py-3 rounded-2xl border border-slate-600/50 hover:border-orange-500/30",
  };

  const iconClasses =
    variant === "header"
      ? "h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300"
      : "w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-300";

  const textClasses =
    variant === "header"
      ? "text-sm font-medium"
      : "text-slate-300 group-hover:text-orange-400 transition-colors duration-300";

  return (
    <a
      href={`mailto:${email}`}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <svg
        className={iconClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={variant === "header" ? "0 0 512 512" : "0 0 20 20"}
      >
        {variant === "header" ? (
          <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
        ) : (
          <>
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </>
        )}
      </svg>
      <span className={textClasses}>{email}</span>
    </a>
  );
};
