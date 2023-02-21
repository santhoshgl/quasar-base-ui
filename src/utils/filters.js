import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function relTime(value) {
  if (!value) return null;
  return dayjs(value).fromNow();
}

export function formatDate(value, format) {
  if (!value) return '';
  return dayjs(value).format(format);
}

export function formatDollar(value, { fractionalDigits = 2 } = {}) {
  const amount = !value || value === 0 ? 0 : parseFloat(value);

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: fractionalDigits,
    maximumFractionDigits: fractionalDigits
  }).format(amount);
}
