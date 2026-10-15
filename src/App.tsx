import './App.css';
import ToastStack from './components/ToastStack';
import AuthCard from './features/auth/AuthCard';

import { useToast } from './hooks/useToast';

function App() {
  const { toastList, showToast, closeToast } = useToast();
  return (
    <>
      <AuthCard showToast={showToast} />
      <ToastStack onClose={closeToast} toastList={toastList} />
    </>
  );
}

export default App;
