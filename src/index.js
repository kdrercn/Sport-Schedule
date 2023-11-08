import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Games from "./Games";
import Game from "./Game";

function Matchlist() {
  return (
    <>
      <h1>9 KASIM 2023 PERŞEMBE</h1>
      <section className="matches">
        {Games.map((game, index) => {
          return <Game {...game} key={game.id} number={game.time} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Matchlist />);
