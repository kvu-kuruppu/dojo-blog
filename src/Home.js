import { useState } from "react";

const Home = () => {
    // let name = 'Kavindu';

    const [name, setName] = useState('Kavindu');

    const [age, setAge] = useState(26);

    const handleClick = () => {
        // console.log('Hey');
        setName('Kuruppu');
        setAge(30);
    };

    // const handleClick2 = (name, e) => {
    //     // console.log(`Hey ${name}`);
    //     console.log('Hey' + name, e.target);
    // };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>Name: { name } | Age: { age }</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClick2('Kavindu', e)}>
                Click me 2
            </button> */}
        </div>
    );
}

export default Home;