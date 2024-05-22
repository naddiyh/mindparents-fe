import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <div style={{ minHeight: "50px" }}>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Bersama ")
            .typeString(' <span style="color: #7631CC;">MindParents</span> ')
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              'Dengan Lingkungan <span style="color: #7631CC;">Positif</span> ',
            )
            .pauseFor(2000)
            .start();
        }}
      />
    </div>
  );
}
