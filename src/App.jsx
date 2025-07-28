import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import apiCalls from './Redux/Action';


function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(apiCalls());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>User Data</h1>
      {

        data.map((item) => <p key={item.id}>{item.name}</p>)

    
      }
    </>
  );
}

export default App;
