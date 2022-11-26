const BlogList = ({ blogs, title, handleDel }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button
                        className='button delete'
                        onClick={() => handleDel(blog.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;