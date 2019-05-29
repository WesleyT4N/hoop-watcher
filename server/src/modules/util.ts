export const getCurrSeasonYear = () => {
  const today = new Date();
  const seasonStart = new Date(today.getFullYear(), 9);
  // If the current month is before  october, then use the prior year
  if (today < seasonStart) {
    return today.getFullYear() - 1;
  }
  return today.getFullYear();
};

export const isToday = (date: string): boolean => {
  const lastUpdateDate = new Date(date);
  const today = new Date();
  return lastUpdateDate.getDate() === today.getDate()
    && lastUpdateDate.getMonth() === today.getMonth()
    && lastUpdateDate.getFullYear() === today.getFullYear();
};
