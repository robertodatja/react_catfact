import { useEffect, useState } from 'react';
import axios from "axios";
import ListFacts from './components/ListFacts'

function App() {
  const [facts, setFacts] = useState([])
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (searchInput.length > 0) {
      const filteredCats = facts.filter((fact) => {
        return fact.fact.toLowerCase().includes(searchInput.toLowerCase());
      })
      setFacts(filteredCats);
    }
  }

  const getData = async () => {
    try {
      const { data } = await axios.get('https://catfact.ninja/facts');
      setFacts(data.data);
    } catch (error) {
      setFacts([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <input
        placeholder="Search..."
        type='text'
        value={searchInput}
        onChange={handleChange}
      />
      <ListFacts facts={facts} />
    </>
  )
}

export default App
