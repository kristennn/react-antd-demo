import './App.less';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AppLayout from './layout';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<AppLayout />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
