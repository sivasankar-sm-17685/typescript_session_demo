import { useState } from 'react';
import type { AuthMode } from '../types/auth';
import { loginUser, signUpUser } from '../api/authApi';
import { validateAuthFormData } from '../utils/validation';
import type { ToastItem } from '../types/toast';

interface AuthCardHookProps {
  showToast: (
    status: ToastItem['status'],
    message: ToastItem['message']
  ) => void;
}

export function useAuthForm(props: AuthCardHookProps) {
  const { showToast } = props;
  const [mode, setMode] = useState<AuthMode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetFormData = () => {
    setEmail('');
    setPassword('');
    setError(null);
  };

  const onSetMode = (nextMode: AuthMode) => {
    setMode(nextMode);
    resetFormData();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, errorMessage } = validateAuthFormData(
      { email, password },
      mode
    );
    if (isValid) {
      try {
        setIsSubmitting(true);
        if (mode === 'signin') {
          const data = await loginUser(email, password);
          showToast('success', `Welcome ${email}`);
          console.log('data', data);
        } else {
          const data = await signUpUser(email, password);
          console.log('Account created', data);
          showToast('success', `Account has been created, Sign in to continue`);
          onSetMode('signin');
        }
        resetFormData();
      } catch (err) {
        showToast(
          'failure',
          err instanceof Error ? err.message : 'Something went wrong'
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setError(errorMessage);
    }
  };

  return {
    mode,
    email,
    password,
    isSubmitting,
    error,
    onSetMode,
    onEmailChange: setEmail,
    onPasswordChange: setPassword,
    onSubmit
  };
}
