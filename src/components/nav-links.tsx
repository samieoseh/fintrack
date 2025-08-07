"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Dashboard" },
    { href: "/transactions", label: "Transactions" },
    { href: "/reports", label: "Reports" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <ul className="flex flex-col gap-2">
      {navItems.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <li
            key={href}
            className={clsx(
              "py-2 px-4 rounded-full transition-colors duration-200 cursor-pointer",
              isActive
                ? "bg-[#3A6C7B]/16 text-[#3A6C7B]"
                : "bg-transparent hover:bg-[#3A6C7B]/16 text-[#1B2528]"
            )}
          >
            <Link href={href} className="text-[1rem]">
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
