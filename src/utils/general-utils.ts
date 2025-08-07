import { FilterFn } from "@tanstack/react-table";

/**
 * Format a number as currency with thousands separators and also handles negative values.
 *
 * @param amount - The numeric amount to format.
 * @param currencyLabel - Optional currency symbol (default is "$").
 * @returns Formatted currency string.
 */
export const formatCurrency = (amount: number, currencyLabel = "$"): string => {
  if (isNaN(amount)) return `${currencyLabel}0`;

  const isNegative = amount < 0;
  const absoluteAmount = Math.abs(amount);

  const formatted = absoluteAmount.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return `${isNegative ? "-" : ""}${currencyLabel}${formatted}`;
};

/**
 * Format a numeric percentage change with a "+" or "–" prefix.
 *
 * @param change - The percentage change as a number (e.g. 5.3 means +5.3%).
 * @returns Formatted growth string with percentage sign.
 */
export const formatGrowth = (change: number): string => {
  if (isNaN(change)) return "0.00%";

  const sign = change > 0 ? "+" : change < 0 ? "−" : "";
  return `${sign}${Math.abs(change).toFixed(0)}%`;
};

export const rangeNumberFilter: FilterFn<any> = (
  row,
  columnId,
  filterValue
) => {
  const rowValue = row.getValue<number>(columnId);
  const [min, max] = filterValue as [number, number];

  if (typeof rowValue !== "number") return false;
  if (min !== undefined && rowValue < min) return false;
  if (max !== undefined && rowValue > max) return false;

  return true;
};
