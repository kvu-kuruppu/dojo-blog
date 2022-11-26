import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All blogs' />
            <BlogList
                blogs={blogs.filter((blog) => blog.author === 'Mario')}
                title={'Mario\'s blog(s)'} />
            <BlogList
                blogs={blogs.filter((blog) => blog.author === 'Yoshi')}
                title={'Yoshi\'s blog(s)'} />
        </div>
    );
}

export default Home;