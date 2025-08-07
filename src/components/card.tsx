import { LucideMoreHorizontal } from "lucide-react";
import React from "react";

export default function Card({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="px-6 py-4 bg-[#34616F]/9  rounded-xl flex-1 space-y-3">
      <div className="flex flex-row justify-between items-center">
        <p className="lg:text-[0.9rem] font-bold"> {label}</p>
        <LucideMoreHorizontal />
      </div>
      <div>
        <p className="text-[#1B2528] font-bold text-[2.1rem]">{value}</p>
        <p className={`text-[#3E7383] text-[0.8rem]`}>{change}</p>
      </div>
    </div>
  );
}
