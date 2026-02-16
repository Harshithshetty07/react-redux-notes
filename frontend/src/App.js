import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }></Route>
          <Route path='/feedback' element={
            <ProtectedRoutes>
              <Feedback />
            </ProtectedRoutes>
          }></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
