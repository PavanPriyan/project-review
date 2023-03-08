import logo from './logo.svg';
import './App.css';
import A from './Components/A';
import Post from './Components/Post';
import Upd from './Components/upd';
import Del from './Components/del';

function App() {
  return (
    <div className="App">
      <A/>
      <Post/>
      <Upd/>
      <Del/>
    </div>
  );
}

export default App;
