import { cloneElement, ReactElement } from "react";
import Avatar from "./avatar";

type AvatarProps = React.ComponentProps<typeof Avatar>;

export default function AvatarGroup({
  children,
  className,
}: {
  children: ReactElement<AvatarProps>[];
  className?: string;
}) {
  // Calculate the width needed based on the number of avatars
  // Each avatar is 32px wide, offset by 25px, so total width is:
  // (numberOfAvatars - 1) * 25 + 32 (width of last avatar)
  const calculatedWidth =
    children.length > 0 ? (children.length - 1) * 25 + 32 : 0;

  return (
    <div
      className={`relative h-10 flex-shrink-0 ${className || ""}`}
      style={{ width: `${calculatedWidth}px` }}
    >
      {children.map((child, index) =>
        cloneElement(child, {
          key: index,
          style: {
            zIndex: children.length - index,
            position: "absolute",
            left: `${index * 25}px`,
            ...child.props.style,
          },
        })
      )}
    </div>
  );
}
