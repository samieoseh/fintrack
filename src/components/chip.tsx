import React from "react";

interface ChipProps {
  dotColor?: "success" | "danger";
  label: string;
}

export default function Chip({ dotColor = "success", label }: ChipProps) {
  const color = dotColor === "success" ? "bg-[#087A2E]" : "bg-[#C6381B]";

  return (
    <div className="inline-flex items-center gap-2 rounded-full px-2 py-1 bg-[#34616F]/9 max-w-fit">
      <div className={`h-1.5 w-1.5 ${color} rounded-full shrink-0`} />
      <p className="text-sm sm:text-[1rem] truncate">{label}</p>
    </div>
  );
}
