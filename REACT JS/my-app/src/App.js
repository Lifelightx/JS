// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  // let name = Math.floor((Math.random()*11));
  return (
    <>
      {/* navbar componenet that is present in navbar.js component */}
      <Navbar name="TextUtils" aboutText="About" /> 
      <div><p>Hello</p></div>
      <h1>Prabhu</h1>
    </>
  );
}

export default App;
