import { LucideMenu } from "lucide-react";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

export default function AppHeader({
  setShowNav,
}: {
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-row items-center gap-6">
      <button
        className="cursor-pointer p-2 rounded-md transition-all duration-200 hover:bg-gray-100 hover:scale-105 active:scale-95"
        onClick={() => setShowNav((prev) => !prev)}
      >
        <LucideMenu color="#1B2528" />
      </button>

      <Image src="/logo.svg" alt="Fintrack logo" width={112} height={32} />
    </div>
  );
}
