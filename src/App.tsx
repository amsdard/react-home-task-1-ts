import React from "react";
import { css } from "@emotion/css";

import { FaqPanel } from "./components/FaqPanel";
import { ToolBoxPanel } from "./components/ToolBoxPanel";

const sectionClassName = css`
  padding: 3rem;
`;

function App() {
  return (
    <div className="App">
      <header>
        <h1>react-ts-homework</h1>
      </header>
      <section>
        <header>
          <h2>Task scenario: Part 1</h2>
        </header>
        <main>
          <p>
            You just joint our small, but constantly growing team. We developing
            well-known SAAS platform for medical purposes. We know that as a new
            developer firstly you want to figure out how thing works, so your
            first task will be something easy without rocket-science.
          </p>
          <p>
            Our users complain on our FAQ section. Their want to have open only
            one panel at once. When their open another the previous one should
            close automatically.
          </p>
        </main>
      </section>
      <section className={sectionClassName}>
        <header>
          <h3>FAQ</h3>
        </header>
        <main>
          <FaqPanel
            question={"Lorem ipsum?"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et eum magnam placeat? Adipisci consectetur, corporis, cumque dolor eaque earum exercitationem in minus numquam pariatur qui tempora? Dolore, perspiciatis, repellendus."
            }
          />

          <FaqPanel
            question={"Some another question?"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et eum magnam placeat? Adipisci consectetur, corporis, cumque dolor eaque earum exercitationem in minus numquam pariatur qui tempora? Dolore, perspiciatis, repellendus."
            }
          />

          <FaqPanel
            question={"Lorem stupid question"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et eum magnam placeat? Adipisci consectetur, corporis, cumque dolor eaque earum exercitationem in minus numquam pariatur qui tempora? Dolore, perspiciatis, repellendus."
            }
          />

          <FaqPanel
            question={"Lorem good question"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et eum magnam placeat? Adipisci consectetur, corporis, cumque dolor eaque earum exercitationem in minus numquam pariatur qui tempora? Dolore, perspiciatis, repellendus."
            }
          />
        </main>
      </section>
      <section>
        <header>
          <h2>Task scenario: Part 2</h2>
        </header>
        <main>
          <p>
            Well done. You did it fast and well. Our product owner is impressed.
            Now you can take the real urgent task from current sprint.
          </p>
          <p>
            Long story short. We plan to release new feature. Diagnosis board
            for xray in realtime: We will add there pined annotations, online
            consultation etc. On left we want place toolbox with all the tools
            grouped within panels behaving exactly like that the ones you have
            done before in our FAQ section. We need different style but in
            genera it will be exactly the same.
          </p>
          <p>
            On daily report one of developers mentioned that we have already
            panel component looks like as we require for this task.
          </p>
          <p>
            Important! In this toolbar max two panels can be opened at once,
            when you clicking 3th the first one close automatically. One more
            thing on page loaded the first panel must be open by default.
          </p>
          <p>Here you can look mentioned panel:</p>
          <section>
            <ToolBoxPanel title={"Tools group title"}>
              <button>option 1</button>
              <button>option 2</button>
            </ToolBoxPanel>
          </section>
          <p>
            Please feel free to refactor this code as much as you want. This
            code in fact is not very well. But remember try to make components
            open for future changes and new features.
          </p>
          <p>Good luck!</p>
        </main>
      </section>
    </div>
  );
}

export default App;
