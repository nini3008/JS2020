
import './App.css';
import Slides from './components/slides'

const title = "slide show"
function App({slides}) {
  return (
    <div className="App">
      <h1>{title}</h1>
      <Slides slides={slides} />
    </div>
  );
}

export default App;
