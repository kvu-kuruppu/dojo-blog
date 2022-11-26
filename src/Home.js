import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
    ]);

    const handleDel = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setblogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect');
        console.log(blogs);
    });

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title='All blogs'
                handleDel={handleDel}
            />
        </div>
    );
}

export default Home;