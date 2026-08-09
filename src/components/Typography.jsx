import React from "react";

const Typography = ({
  as: Component = "p", // Which element to render (h1, h2, span, p, etc.)
  text,
  fontSize = "14px",
  fontColor = "#000",
  fontWeight = "normal",
  textAlign = "left",
  lineHeight = "1.5",
  letterSpacing = "normal",
  margin = "0",
  padding = "0",
  style = {},
  className = "",
  children,
  ...rest
}) => {
  return (
    <Component
      className={className}
      style={{
        fontSize,
        color: fontColor,
        fontWeight,
        textAlign,
        lineHeight,
        letterSpacing,
        margin,
        padding,
        ...style, // allow overrides
      }}
      {...rest}
    >
      {text || children}
    </Component>
  );
};

export default Typography;
