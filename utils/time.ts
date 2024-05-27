import { formatDistanceToNow } from 'date-fns';

export const formatUploadTime = (timestamp: any): string => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};
