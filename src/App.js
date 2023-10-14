import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/hello' element={<h1>Hello!</h1>}></Route>
      </Routes>
      <Routes>
        <Route path='/movie' element={<Detail />}></Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    );
}

export default App;

