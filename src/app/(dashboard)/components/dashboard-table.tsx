"use client";
import React, { useEffect, useState } from "react";
import { Transaction } from "../lib/typings";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "@/components/table";
import Chip from "@/components/chip";
import { TRANSACTIONS } from "../lib/constants";
import LoadingSpinner from "@/components/loading-spinner";
import { formatCurrency } from "@/utils/general-utils";

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    sortUndefined: "last", //force undefined values to the end
    sortDescFirst: false,
  }),
  columnHelper.accessor("remark", {
    header: "Remark",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => formatCurrency(info.getValue()),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("currency", {
    header: "Currency",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("type", {
    header: "Type",
    cell: (info) => (
      <Chip
        label={info.getValue().toString()}
        dotColor={
          info.getValue().toString() === "Credit" ? "success" : "danger"
        }
      />
    ),
    footer: (info) => info.column.id,
  }),
];

export default function DashboardTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // simulate fetch here
    setTimeout(() => {
      setTransactions(TRANSACTIONS);
      setIsLoading(false);
    }, 3000);
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (transactions.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center h-60 text-center text-gray-500 dark:text-gray-400">
        <svg
          className="w-12 h-12 mb-3 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v1a3 3 0 006 0v-1m-9-4h12M6 13V6a2 2 0 012-2h8a2 2 0 012 2v7"
          />
        </svg>
        <h2 className="text-lg font-semibold">No Transactions Found</h2>
        <p className="text-sm mt-1">
          You don’t have any transactions yet. Once you do, they’ll show up
          here.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Table data={transactions} columns={columns} enablePagination={false} />
    </div>
  );
}
