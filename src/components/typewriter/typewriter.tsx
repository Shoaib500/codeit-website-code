import React from "react";
import './typewriter.scss'
import RedoAnimText from "./RedoAnimText";
import CursorBlinker from "./cursorBlinker/cursorBlinker";

type TypewriterProps = {
  texts: string[]
}

const Typewriter: React.FC<TypewriterProps> = ({texts}) => {
  return (
    <div className="type-writer-wrapper">
      <div className="typewriter">
        <RedoAnimText delay={1 + 1} texts={texts} />
        {/* <CursorBlinker /> */}
      </div>
    </div>
  );
};
export default Typewriter;
