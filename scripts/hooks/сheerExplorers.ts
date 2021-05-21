import * as React from "react";

let styles = [
  "background: #ceceff",
  "border-radius: 8px",
  "color: black",
  "display: inline-block",
  "font-size: 24px",
  "font-family: 'Montserrat', monospace",
  "font-weight: bold",
  "padding: 4px 18px",
].join(";");

export const useCheerExplorers = () => {
  React.useEffect(() => {
    console.clear();
    console.log("Helllllloooo there", styles);
  }, []);
};
