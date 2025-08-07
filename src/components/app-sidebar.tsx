import { Dispatch, SetStateAction } from "react";
import NavLinks from "./nav-links";
import { LucideX } from "lucide-react";

export default function AppSidebar({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      {/* Mobile overlay */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setShowNav(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white  z-30
          transition-transform duration-300 ease-in-out
          ${showNav ? "translate-x-0" : "-translate-x-full"}
          w-[280px] md:w-64 lg:w-72
          md:relative md:translate-x-0 md:z-auto
        `}
      >
        <div className="py-4 md:py-8 lg:py-10 h-full flex flex-col">
          <div className="flex justify-end p-4 md:hidden">
            <button
              onClick={() => setShowNav(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <LucideX className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 px-4">
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
}
