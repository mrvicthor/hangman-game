import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <section className="space-y-4 md:max-w-[44rem]lg:max-w-[73.3125rem]">
      <div className="flex gap-4">
        <Square value="A" />
        <Square value="B" />
        <Square value="C" />
        <Square value="D" />
        <Square value="E" />
        <Square value="F" />
        <Square value="G" />
        <Square value="H" />
        <Square value="I" />
      </div>
      <div className="flex gap-4">
        <Square value="J" />
        <Square value="K" />
        <Square value="L" />
        <Square value="M" />
        <Square value="N" />
        <Square value="O" />
        <Square value="P" />
        <Square value="Q" />
        <Square value="R" />
      </div>
      <div className="flex gap-4">
        <Square value="S" />
        <Square value="T" />
        <Square value="U" />
        <Square value="V" />
        <Square value="W" />
        <Square value="X" />
        <Square value="Y" />
        <Square value="Z" />
      </div>
    </section>
  );
};

export default Board;
