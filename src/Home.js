import {useState} from 'react';
const Home = () => {
    // let name = 'Tara';

    const [name, setName]= useState('Tara')
    const [age, setAge] =useState (25)
    const handleClick =(e)=>{
        console.log(e)
        setName('Pretty')
        setAge(30)

    }
    const handleClickAgain =(name,e) =>{
        console.log(`hello ${name}, ${e.target}, ${e}`)
    }

    return ( 
        <div className="home">
            
           <h2>Homepage</h2>
           <p>{name} is {age} years old</p>
           <button onClick ={handleClick}>Click me</button>
           <button onClick ={(e)=>handleClickAgain('Tara',e)}>Click Again</button>
        </div>
     );
}
 
export default Home;