export type AuthMode = 'signin' | 'signup';

export interface AuthFormData {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  email: string;
  username: string;
  accessToken: string;
}

export interface SignUpResponse {
  id: number;
  email: string;
}

export interface AuthFormProps {
  email: string;
  password: string;
  error: string | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onEmailChange: (val: string) => void;
  onPasswordChange: (val: string) => void;
  isSubmitting: boolean;
}
