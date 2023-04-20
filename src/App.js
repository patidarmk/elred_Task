import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className='main'>
        <Sidebar />
        <About />
      </div>
    </div>
  );
}

export default App;
