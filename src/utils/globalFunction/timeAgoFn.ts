function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const second = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  let interval: string = "just now";

  for (const [unit, value] of Object.entries(intervals)) {
    const countValue = Math.floor(second / value);

    if (countValue > 0) {
      interval =
        countValue === 1 ? `${countValue} ${unit}` : `${countValue} ${unit}s`;
      break;
    }
  }
  return interval;
}

export default timeAgo;
