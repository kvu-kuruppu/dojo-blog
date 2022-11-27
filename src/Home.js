import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setblogs] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((response) => {
                if (!response.ok) {
                    throw Error('Something is not wrong!');
                }
                return response.json();
            }
            )
            .then((data) => {
                setblogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((e) => {
                setblogs(null);
                setIsLoading(false);
                setError(e.message);
            });
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {
                blogs
                &&
                <BlogList
                    blogs={blogs}
                    title='All blogs'
                />
            }
        </div>
    );
}

export default Home;