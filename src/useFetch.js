import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error('Something is not wrong!');
                }
                return response.json();
            }
            )
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((e) => {
                setData(null);
                setIsLoading(false);
                setError(e.message);
            });
    }, []);

    return {data, isLoading, error};
};

export default useFetch;