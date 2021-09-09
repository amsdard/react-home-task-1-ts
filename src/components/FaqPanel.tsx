import React, {useState} from 'react';
import { css } from '@emotion/css';

export interface FaqPanelProps {
  question: string;
  answer: string;
}

export const FaqPanel: React.FC<FaqPanelProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const handleHeaderClick = () => setOpen(x => !x);

  return (
    <article className={css`margin-bottom: 1.4rem;`}>
      <header
        onClick={handleHeaderClick}
        className={
          css`
            cursor: pointer;
            padding: 0.25rem 2rem;
            background-color: ${ open ? 'beige' : 'bisque'};
            font-size: 1.2rem;
          `
        }
      >
        <h4>{question}</h4>
      </header>
      <main
        className={
          css`
            background-color: azure;
            padding: 2rem 17rem 2rem 4rem;
            display: ${open ? 'block' : 'none'};
          `
        }
      >
        {answer}
      </main>
    </article>
  )
}
