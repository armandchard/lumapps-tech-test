/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Message, Kind } from '@lumx/react';
import Header from '../components/Header';
import Search from '../components/Search';
import Details from './Details';
import { get } from '../api';

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('th');
  const [error, setError] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get('/characters', { nameStartsWith: value, limit: 4, offset });
        setData(response);
      } catch (error) {
        setError(error);
      }
    };
    if (value) {
      fetchData();
    } else {
      setData([]);
    }
  }, [value, offset]);

  return (
	<Router>
      <Header value={value} setValue={setValue} />
      {error ? <Message kind={Kind.error} hasBackground>
        <p>
          {error.message}
        </p>
      </Message> : null}
		<Routes>
			<Route
				exact
				path="/"
          element={<Search data={data} onPageChange={setOffset}/>}
			/>
			<Route
				path="/details/:id"
          element={<Details />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
		</Routes>
	</Router>
  );
}

export default App;
