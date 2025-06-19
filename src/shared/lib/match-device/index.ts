export const matchDevice = (userAgent: string | undefined | null) => {
  const isIos = userAgent && /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = userAgent && /Android/.test(userAgent);
  const isWeb = !userAgent || (!isAndroid && !isIos);

  return {
    isIos,
    isAndroid,
    isWeb,
  };
};
