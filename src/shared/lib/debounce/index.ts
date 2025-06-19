export function debounce(cb: () => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (...args: unknown[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      cb(...(args as []));
    }, delay);
  };
}
