import React from "react";

type Props = {
  href: string;
  name: string;
  className?: string;
};

export const OutboundLink: React.FC<Props> = ({ href, name, className }) => {
  return (
    <a
      className={`${className} text-blue-500 hover:underline`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};
