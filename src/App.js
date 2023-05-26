import logo from './logo.svg';
import './App.css';
import Description from './components/description';
import Apod from './components/apod';
import Mars from './components/mars';

function App() {
  return (
    <div className='w-full h-full bg-gradient-to-r from-violet-900 to-fuchsia-900'>
      <Description/>
      <Apod/>
      <Mars/>
    </div>
  );
}

export default App;
