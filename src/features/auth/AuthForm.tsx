import type { AuthFormProps } from '../../types/auth';
import FormField from '../../components/FormField';

export default function AuthForm(props: AuthFormProps) {
  const {
    email,
    onSubmit,
    onEmailChange,
    password,
    onPasswordChange,
    error,
    isSubmitting
  } = props;

  return (
    <form className='auth-form' onSubmit={onSubmit}>
      <FormField
        label='Email'
        value={email}
        onChange={onEmailChange}
        placeholder='Enter your email id'
      />
      <FormField
        label='Password'
        type='password'
        value={password}
        onChange={onPasswordChange}
        placeholder='Enter your password'
      />
      <button className='auth-submit' type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className='auth-error'>{error}</p>}
    </form>
  );
}
