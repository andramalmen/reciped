import useSWR from 'swr';

import { fetcher } from '../api/meals';

const useSearchByCategory = category => {
    const { data, error } = useSWR(`/filter.php?c=${category.toLowerCase()}`, fetcher, {
        onErrorRetry: (err, _, __, revalidate, { retryCount }) => {
            if (err.status === 404) {
                return;
            }

            if (retryCount >= 4) {
                return;
            }
            setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
        },
    });

    return [data, error];
};

export default useSearchByCategory;
