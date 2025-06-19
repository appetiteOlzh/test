import dayjs from "dayjs";
import "dayjs/locale/ru";

export const formatDate = ({
  date,
  locale,
}: {
  date: string;
  locale: string;
}): string => {
  if (locale === "ru") return dayjs(date).locale(locale).format("DD MMMM YYYY");
  return dayjs(date).locale(locale).format("MMMM DD, YYYY");
};
