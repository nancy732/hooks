import React from "react";
import useBodyScrollPosition from "./scroll";

export default function ScrollPosition() {
  const scrollPosition = useBodyScrollPosition();
  const wrapperStyles = {
    height: "5000px"
  };
  const displayStyles = {
    position: "fixed",
    width: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "20px",
    textAlign: "center"
  };
  return (
    <div style={wrapperStyles}>
      <div style={displayStyles}>
        {scrollPosition !== null ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "tomato",
              height: "100%",
              width: 100
            }}
          >
            current scroll position {scrollPosition}
          </div>
        ) : (
          0
        )}
      </div>
    </div>
  );
}
