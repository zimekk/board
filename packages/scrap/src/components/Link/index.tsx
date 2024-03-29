import React, { type CSSProperties, type MouseEventHandler } from "react";

export function Link({
  href = "#",
  ...props
}: {
  children: any;
  href?: string;
  onClick?: MouseEventHandler;
  rel?: string;
  style?: CSSProperties;
  target?: string;
}) {
  const hash = href[0] === "#";

  return (
    <a
      href={href}
      target={hash ? undefined : "_blank"}
      rel={hash ? undefined : "noopener noreferrer"}
      {...props}
    />
  );
}
