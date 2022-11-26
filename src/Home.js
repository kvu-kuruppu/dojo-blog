const Home = () => {
    const handleClick = () => {
        // console.log('Hey');
    };

    // const handleClick2 = (name, e) => {
    //     // console.log(`Hey ${name}`);
    //     console.log('Hey' + name, e.target);
    // };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClick2('Kavindu', e)}>
                Click me 2
            </button> */}
        </div>
    );
}

export default Home;