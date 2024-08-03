/**
 * Converts an ISO 8601 date-time string to a 'yyyy/mm/dd' formatted string.
 *
 * @param inputDate - The ISO 8601 date-time string to be converted.
 * @returns The formatted date string in 'yyyy/mm/dd' format.
 */
export function formatDate(inputDate: string): string {
  // Create a new Date object from the input string
  const date = new Date(inputDate);

  // Get the year, month, and day
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 since getMonth() returns 0-11
  const day = ("0" + date.getDate()).slice(-2);

  // Return the formatted date string
  return `${year}/${month}/${day}`;
}
