export const YEARS = Array.from(
  { length: new Date().getFullYear() - 2015 + 1 },
  (_, i) => 2015 + i
);
