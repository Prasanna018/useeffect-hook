import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [pic, setpic] = useState([]);

  async function GetData() {
    try {

      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
      const data = await response.json();
      setpic(data);
    } catch (error) {
      console.error(error);

    }

  }

  useEffect(() => {
    GetData()

  }, [])


  return (


    <div className='app'>

      {pic.map(item =>
        <picture style={{ width: "90vw", margin: "0px auto" }} key={item.id}> <img style={{ width: "30vw", height: "30vh", objectFit: "cover" }} src={item.url}></img> </picture>

      )}
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function picture() {
  return (
    <div >
      <img ></img>
    </div>
  )
}

export default App;
