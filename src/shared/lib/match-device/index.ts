export const matchDevice = (deviceOS: string | undefined | null) => {
  const isIos = deviceOS && deviceOS === "iOS";
  const isAndroid = deviceOS && deviceOS === "Android";
  const isWeb = !deviceOS || (!isAndroid && !isIos);

  return {
    isIos,
    isAndroid,
    isWeb,
  };
};
