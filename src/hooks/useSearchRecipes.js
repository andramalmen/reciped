import useSWR from 'swr';

import { fetcher } from '../api/meals';

const useSearchRecipes = (shouldFetch, searchTerm) => {
    const { data, error } = useSWR(shouldFetch ? `/search.php?s=${searchTerm}` : null, fetcher, {
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

export default useSearchRecipes;
