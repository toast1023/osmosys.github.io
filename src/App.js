import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = 'o s m o s y s'
  const something = 999
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
        <p> Money Raised: {something} </p>
      </div>
    </div>
  );
}

export default App;
