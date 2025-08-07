import { LucideChevronDown, LucideMoreHorizontal } from "lucide-react";
import AvatarGroup from "@/components/avatar-group";
import Avatar from "@/components/avatar";
import { AVATAR_PATH } from "./lib/constants";
import Chip from "@/components/chip";
import DashboardTable from "./components/dashboard-table";
import SummaryCard from "./components/summary-card";
import Link from "next/link";
import React from "react";

interface DashboardPageProps {
  searchParams: Promise<{ tab?: string }>;
}

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const { tab } = React.use(searchParams) ?? "overview";

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-4 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl sm:text-3xl font-bold leading-none">
              Wallet Ledger
            </h1>
            <LucideChevronDown fill="black" stroke="none" />
          </div>
          <Chip dotColor="success" label="Active" />
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#4B8B9F] text-sm sm:text-[15px] rounded-full text-white">
            Share
          </button>
          <button className="border border-[#49656E]/20 bg-[#FCFDFD] rounded-full p-2">
            <LucideMoreHorizontal color="#1B2528" />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <AvatarGroup>
          {AVATAR_PATH.map((path, index) => (
            <Avatar
              height={32}
              width={32}
              showBorder={true}
              src={path}
              key={index}
              alt={path}
            />
          ))}
        </AvatarGroup>
        <p className="text-[#15272D]/62 text-sm">Ava, Liam, Noah +12 others</p>
      </div>

      <div className="flex flex-col">
        <div className="flex border-b border-[#49656E]/20 overflow-x-auto">
          <Link
            href="?tab=overview"
            className={`px-4 py-3 whitespace-nowrap border-b-2 ${
              tab === "overview"
                ? "border-[#4B8B9F] text-[#4B8B9F]"
                : "border-transparent text-[#49656E] hover:text-[#4B8B9F]"
            } font-medium text-sm sm:text-base`}
          >
            Overview
          </Link>
          <Link
            href="?tab=transactions"
            className={`px-4 py-3 whitespace-nowrap border-b-2 ${
              tab === "transactions"
                ? "border-[#4B8B9F] text-[#4B8B9F]"
                : "border-transparent text-[#49656E] hover:text-[#4B8B9F]"
            } font-medium text-sm sm:text-base`}
          >
            Transactions
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {tab === "overview" && (
          <>
            <SummaryCard />
            <DashboardTable />
          </>
        )}
        {tab === "transactions" && <DashboardTable />}
      </div>
    </div>
  );
}
