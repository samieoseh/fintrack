"use client";
import Card from "@/components/card";
import { formatCurrency, formatGrowth } from "@/utils/general-utils";
import React, { useEffect, useState } from "react";
import { DASHBOARD_SUMMARY_DATA } from "../lib/constants";
import { DashboardSummary } from "../lib/typings";
import Skeleton from "@/components/skeleton";

export default function SummaryCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardSummary, setDashboardSummary] = useState<DashboardSummary>();

  useEffect(() => {
    // simulate fetch here
    setTimeout(() => {
      setDashboardSummary(DASHBOARD_SUMMARY_DATA);
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="py-2 text-[1.25rem] font-bold">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Skeleton type="container" />
          <Skeleton type="container" />
          <Skeleton type="container" />
          <Skeleton type="container" />
        </div>
      </div>
    );
  }

  if (!dashboardSummary) {
    return (
      <div className="flex flex-col items-center justify-center h-40 text-center text-gray-500">
        <svg
          className="w-10 h-10 mb-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1 4v1m8-5a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="lg:text-lg text-md font-semibold">
          No summary data available
        </h2>
        <p className="text-sm mt-1">
          We could not load your dashboard summary yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="py-2 lg:text-[1.25rem] font-bold text-[.9rem]">Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card
          label="Total Balance"
          value={formatCurrency(dashboardSummary.totalBalance)}
          change={formatGrowth(dashboardSummary.balanceChange)}
        />

        <Card
          label="Total Credits"
          value={formatCurrency(dashboardSummary.totalCredits)}
          change={formatGrowth(dashboardSummary.creditsChange)}
        />

        <Card
          label="Total Debits"
          value={formatCurrency(dashboardSummary.totalDebits)}
          change={formatGrowth(dashboardSummary.debitsChange)}
        />

        <Card
          label="Transactions"
          value={dashboardSummary.transactionCount.toString()}
          change={formatGrowth(dashboardSummary.transactionChange)}
        />
      </div>
    </div>
  );
}
