import { useEffect, useState } from 'react';

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('react');

  const newsShowing = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${search}`)
      .then(data => data.json())
      .then(data => setNews(data.hits))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    newsShowing();
  }, []); // Empty dependency array means this runs only on initial render

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newsShowing(); // Fetch news when form is submitted
  };

  return (
    <>
      <h1>News App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="search News"
          onChange={handleSearch}
        />
        <input type="submit" value="search" />
      </form>
      {news.map((n,i) => (
        <div key={i}>
          <p style={{ color: 'navyblue', fontSize: '20px' }}>{n.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
