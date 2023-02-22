import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
