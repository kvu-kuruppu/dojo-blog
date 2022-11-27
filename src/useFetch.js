import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then((response) => {
                if (!response.ok) {
                    throw Error('Something is not wrong!');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((e) => {
                if (e.name === 'AbortError') {
                    console.log('fetch abort');
                } else {
                    setData(null);
                    setIsLoading(false);
                    setError(e.message);
                }
            });

        return () => abortController.abort();
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;