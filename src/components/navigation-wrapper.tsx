"use client";
import React, { useState } from "react";
import AppHeader from "./app-header";
import AppSidebar from "./app-sidebar";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <AppHeader setShowNav={setShowNav} />
      <div className="flex flex-row flex-1 items-start">
        <AppSidebar showNav={showNav} setShowNav={setShowNav} />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </>
  );
}
