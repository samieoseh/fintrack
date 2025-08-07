import Image from "next/image";
import React from "react";

export default function Avatar({
  src,
  height,
  width,
  alt,
  showBorder = false,
  style,
}: {
  src: string;
  alt: string;
  height: number;
  width: number;
  style?: React.CSSProperties;
  showBorder?: boolean;
}) {
  return (
    <div
      className={`${
        showBorder && "border border-white"
      } shadow-sm inline-block rounded-full`}
      style={style}
    >
      <Image height={height} width={width} src={src} alt={alt} />
    </div>
  );
}
