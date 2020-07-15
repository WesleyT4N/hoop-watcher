export const getCurrSeasonYear = () => {
  const today = new Date();
  const seasonStart = new Date(today.getFullYear(), 9);
  // If the current month is before  october, then use the prior year
  if (today < seasonStart) {
    return today.getFullYear() - 1;
  }
  return today.getFullYear();
};

export const shouldUpdate = (date: string): boolean => {
  const lastUpdateDate: number = new Date(date).getTime();
  const today: number = new Date().getTime();
  const TWENTY_FOUR_HOURS = 60 * 60 * 24 * 1000;
  return today - lastUpdateDate >= TWENTY_FOUR_HOURS;
};

export const convDateString = (date: string): string => {
  return date.replace(/[TZ]/g, " ").slice(0, -5);
};

export const YOUTUBE_API_BASE_SEARCH_URL =
  "https://www.googleapis.com/youtube/v3/search";
