import useSWR from 'swr';

import { fetcherSearch } from '../api/meals';

const useSearchByCategory = category => {
    const { data, error } = useSWR(`/filter.php?c=${category.toLowerCase()}`, fetcherSearch, {
        onErrorRetry: (err, _, __, revalidate, { retryCount }) => {
            if (err.status === 404) {
                return;
            }

            if (retryCount >= 4) {
                return;
            }
            // Retry after 5 seconds.
            setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
        },
    });

    return [data, error];
};

export default useSearchByCategory;
