import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Spinner from './components/Spinner';
import List from './components/List';
import './App.css';

function App() {

  const [ issuesData, setIssuesData ] = useState([]);
  const [ issuesSearch, setIssuesSearch ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios.get('https://api.github.com/repos/facebook/react/issues?per_page=100')
      .then(response => {
        setLoading(false);
        setIssuesData(response.data);
        setIssuesSearch(response.data);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      })
  }, []);

  return (
    <div className="App">
      {error ?
        <h1>Ups! Problems with API</h1>
        :
        <div>
          {loading ? 
            <Spinner /> :
            <div>
              <Search 
                issuesData={issuesData}
                setIssuesSearch={setIssuesSearch}
              />
              <List  
                issuesData={issuesData}
                issuesSearch={issuesSearch}
              />
            </div>
          }
        </div>
      } 
    </div>
  );
}

export default App;
