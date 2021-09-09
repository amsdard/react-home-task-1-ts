import React, { useState } from "react";
import { css } from "@emotion/css";

export interface ToolBoxPanelProps {
  title: string;
  icon?: string;
}

export const ToolBoxPanel: React.FC<ToolBoxPanelProps> = ({
  title,
  icon,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const handleHeaderClick = () => setOpen((x) => !x);

  return (
    <article
      className={css`
        margin-bottom: 1.4rem;
      `}
    >
      <header
        onClick={handleHeaderClick}
        className={css`
          cursor: pointer;
          padding: 0.1rem 1rem;
          background-color: ${open ? "gray" : "lightgray"};
          font-size: 0.8rem;
        `}
      >
        <h4>
          {title}{" "}
          {icon && (
            <span
              className={css`
                display: inline-block;
                width: 0.5rem;
                height: 0.5rem;
                background-color: #282c34;
              `}
            />
          )}
        </h4>
      </header>
      <main
        className={css`
          background-color: #8c8c8c;
          padding: 0.5rem;
          display: ${open ? "block" : "none"};
        `}
      >
        {children}
      </main>
    </article>
  );
};
