import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default (date: any): string => {
  try {
    return dayjs(date).toNow();
  } catch (e) {
    console.error(e.message);
    return "";
  }
};
