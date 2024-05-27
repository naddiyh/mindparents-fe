"use client";
import { useEffect } from "react";

export function MyComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.onload = () => {
      if (
        window.voiceflow &&
        window.voiceflow.chat &&
        typeof window.voiceflow.chat.load === "function"
      ) {
        window.voiceflow.chat.load({
          verify: { projectID: "662308e9017ae9bcb8d1c2af" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        });
      } else {
        console.error(
          "window.voiceflow.chat.load is not a function or not defined.",
        );
      }
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
