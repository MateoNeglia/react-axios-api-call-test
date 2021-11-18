import logo from './logo.svg';
import './App.css';
import useAxios from 'axios-hooks';
import { axios } from "./axios";
import { useEffect, useState } from 'react';
import { map } from 'async';
import ReactGa from 'react-ga';
import ButtonCounter from './Button-counter';

function App() {

    
  const [{loading, data, error, response}, refetch] = useAxios({
    method: 'GET',
    url: 'https://reqres.in/api/users?delay=1',
  })
  
  const getPageCount = async () => {
    
    const response = await axios.get().catch((err) => {
      console.log("Error:", err);
   });
   console.log('response api: ', response);

    if(response) await data;
      setCounts(response.data.value)

  }

  
  const [text, setText] = useState('');
  const [counts, setCounts] = useState('');
  const[dataArray, setArray]  = useState([]);
    
  useEffect(() => {    
    ReactGa.initialize('UA-208370085-1');
    //this is to report page view
    ReactGa.pageview('/EmpOfTheMoth');

    if (data) {
      setArray(data.data);
      getPageCount();
      console.log(data.data)
    } else if (error) {
      setText(error.message);
    }   

  }, [data, error]); 
  
  
  return (
    <div className="App">
      <header className="App-header"></header>      
      {loading && 
        <div className="Loader">
          <div className='Spinner-container'>
            <img src={logo} className="App-logo" alt="logo" /> 
            <p>Loading...</p>
          </div>          
        </div>}         

        {text}
        
      {dataArray.length > 0 && <div><h1>Employee of the Month cards:</h1>
      <div className='client-card-container' id='style-2'>
      {dataArray.map(data => (
        <div className='client-card'>
          <img key={data.id} src={data.avatar}/>
          <ul>
            <li>Name: {data.first_name} {data.last_name}</li>
            <li>Email: {data.email}</li>
          </ul>
        </div>
          
      ))}
      </div>
        <p className='Page-counter'>Page Visits: {counts} </p>  
        <ButtonCounter/>      
      </div>}
      
      
      
    </div>
  );
}

export default App;
