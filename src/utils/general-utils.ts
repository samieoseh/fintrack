/**
 * Format a number as currency with thousands separators.
 *
 * @param amount - The numeric amount to format.
 * @param currencyLabel - Optional currency symbol (default is "$").
 * @returns Formatted currency string.
 */
export const formatCurrency = (amount: number, currencyLabel = "$"): string => {
  if (isNaN(amount)) return `${currencyLabel}0`;

  return `${currencyLabel}${amount.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
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
