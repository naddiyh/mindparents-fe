import { formatDistanceToNow } from "date-fns";

export const formatUploadTime = (timestamp: any): string => {
  // Check if timestamp is a valid date
  if (!(timestamp instanceof Date) || isNaN(timestamp.getTime())) {
    return "Invalid date";
  }

  return formatDistanceToNow(timestamp, { addSuffix: true });
};
