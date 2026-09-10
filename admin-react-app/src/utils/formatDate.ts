function formatParts(value: string, includeTime: boolean) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  const parts = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...(includeTime
      ? { hour: "numeric", minute: "2-digit", hour12: true }
      : {}),
  }).formatToParts(date);

  return parts.reduce<Record<string, string>>((result, part) => {
    result[part.type] = part.value;
    return result;
  }, {});
}

export function formatDate(value: string, includeTime = false) {
  const parts = formatParts(value, includeTime);
  if (!parts) return value;

  const date = `${parts.day} ${parts.month} ${parts.year}`;
  if (!includeTime) return date;

  return `${date}, ${parts.hour}:${parts.minute} ${parts.dayPeriod.toUpperCase()}`;
}
