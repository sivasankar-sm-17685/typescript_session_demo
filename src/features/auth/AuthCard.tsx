import '../../App.css';
import { useAuthForm } from '../../hooks/useAuthForm';
import type { ToastItem } from '../../types/toast';
import AuthForm from './AuthForm';

interface AuthCardProps {
  showToast: (
    status: ToastItem['status'],
    message: ToastItem['message']
  ) => void;
}

function AuthCard(props: AuthCardProps) {
  const {
    mode,
    email,
    password,
    isSubmitting,
    error,
    onSetMode,
    onEmailChange,
    onPasswordChange,
    onSubmit
  } = useAuthForm(props);

  return (
    <div className='auth-landing'>
      <div className='auth-card'>
        <div className='auth-title'>
          {mode === 'signin' ? 'Welcome home!!!' : 'Create your account'}
        </div>
        <div className='auth-tabs'>
          <button
            type='button'
            className={`tab-button ${mode === 'signin' ? 'active' : ''}`}
            onClick={() => onSetMode('signin')}
          >
            Sign In
          </button>
          <button
            type='button'
            className={`tab-button ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => onSetMode('signup')}
          >
            Sign Up
          </button>
        </div>
        <AuthForm
          email={email}
          password={password}
          isSubmitting={isSubmitting}
          error={error}
          onSubmit={onSubmit}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
        />
      </div>
    </div>
  );
}

export default AuthCard;
