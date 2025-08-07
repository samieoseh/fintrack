// components/Skeleton.tsx

import React from "react";
import clsx from "clsx";

type SkeletonType = "container" | "text" | "circle" | "rect";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: SkeletonType;
  width?: number | string;
  height?: number | string;
  className?: string;
  rounded?: boolean;
}

function Skeleton(props: SkeletonProps) {
  const {
    type = "text",
    width,
    height,
    className,
    rounded = true,
    ...rest
  } = props;

  const baseStyles = "animate-pulse bg-gray-200";

  const typeStyles = (() => {
    switch (type) {
      case "text":
        return "h-4 w-full";
      case "container":
        return "h-32 w-full";
      case "circle":
        return "h-10 w-10 rounded-full";
      case "rect":
        return "h-10 w-20";
      default:
        return "";
    }
  })();

  const styleOverrides: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={clsx(
        baseStyles,
        typeStyles,
        rounded && type !== "circle" && "rounded-md",
        className
      )}
      style={styleOverrides}
      {...rest}
    />
  );
}

export default Skeleton;
