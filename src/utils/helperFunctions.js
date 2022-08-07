import { Timestamp } from "firebase/firestore";
import { formatDistance } from "date-fns";

export const formatTimestamp = (seconds, nanoseconds) => {
  const postCreatedAt = new Timestamp(seconds, nanoseconds).toDate();
  return relativeTime(postCreatedAt);
};
export const relativeTime = (time) => {
  let result = formatDistance(new Date(time), new Date(), { addSuffix: true });
  return result;
};
export const sortUids = (uidArray) => {
  const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });
  const sortedUidArray = uidArray.sort((a, b) => {
    return collator.compare(a, b);
  });
  return `${sortedUidArray[0]}${sortedUidArray[1]}`;
};
