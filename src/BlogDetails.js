import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();

    const url = `http://localhost:8000/blogs/${id}`;

    const { data: blog, isLoading, error } = useFetch(url);

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {
                blog
                &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            }
        </div>
    );
}

export default BlogDetails;