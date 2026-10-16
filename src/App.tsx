import './App.css';
import ToastStack from './components/ToastStack';
import AuthCard from './features/auth/AuthCard';
import { Routes, Route } from 'react-router-dom';
import { useToast } from './hooks/useToast';
import ProductList from './features/Products/ProductsList';
import ProtectedRoute from './components/ProtectedRoute';
import ProductDetail from './components/ProductDetail';

function App() {
  const { toastList, showToast, closeToast } = useToast();
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthCard showToast={showToast} />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/products' element={<ProductList />}></Route>
          <Route
            path='/products/:id'
            element={<ProductDetail showToast={showToast} />}
          ></Route>
        </Route>
      </Routes>
      <ToastStack onClose={closeToast} toastList={toastList} />
    </>
  );
}

export default App;
