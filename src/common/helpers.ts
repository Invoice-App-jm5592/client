import { InvoiceStatus } from '../modules/invoices/types';
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + '...';
}

export const transformStringToTitleCase = (str: InvoiceStatus|undefined) => {
  if (!str) {
    return;
  }
  const lowerCaseString = str.toLowerCase();
  const firstLetter = lowerCaseString.charAt(0).toUpperCase();
  const restLetters = lowerCaseString.slice(1);
  return `${firstLetter}${restLetters}`;
}