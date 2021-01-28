export const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function sortByKey(elements, comparator, ascending = true) {
  if (!elements || !elements.length) return [];
  const direction = ascending ? 1 : -1;
  const isNumber = typeof comparator(elements[0]) === "number";
  return elements.sort((a, b) =>
    isNumber
      ? comparator(a) - comparator(b) > 0
        ? 1 * direction
        : -1 * direction
      : comparator(a) >= comparator(b)
      ? 1 * direction
      : -1 * direction
  );
}
