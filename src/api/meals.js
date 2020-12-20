import fetch from 'unfetch';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetcher = url => {
    return fetch(`${BASE_URL}${url}`)
        .then(res => res.json())
        .then(data => data);
};
