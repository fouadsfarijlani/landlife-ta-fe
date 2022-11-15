import React, { useEffect, useState } from 'react';
import './App.css';
import axios from './requests/axiosMain';

function App() {
  const [data, setData] = useState<object>();
  useEffect(()=> {
    const fetchData = async() => {
      try {
        const response = await axios.get('');
        setData(response.data);
      }
      catch(err) {
        // Checking if err.response exists
       console.log(err);
      }
    }
    fetchData();
  },[])
  console.log(data);
  return (
    <div>
    </div>
  );
}

export default App;
