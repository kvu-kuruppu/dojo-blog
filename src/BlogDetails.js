import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    const url = `http://localhost:8000/blogs/${id}`;

    const { data: blog, isLoading, error } = useFetch(url);

    const history = useHistory();

    const handleOnClick = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE',
        }).then(() => {
            console.log('Deleted');
            history.push('/');
        });
    };

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
                    <button
                        className="button delete"
                        onClick={handleOnClick}
                    >
                        Delete</button>
                </article>
            }
        </div>
    );
}

export default BlogDetails;