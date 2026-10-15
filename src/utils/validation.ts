import type { AuthFormData, AuthMode } from '../types/auth';
interface validationResponse {
  isValid: boolean;
  errorMessage: string | null;
}
export function validateAuthFormData(
  data: AuthFormData,
  mode: AuthMode
): validationResponse {
  let isValid: boolean = true,
    errorMessage: string | null = null;
  const { email, password } = data;
  if (email === null || email.trim().length === 0) {
    isValid = false;
    errorMessage = 'Email is required';
  } else if (password === null || password.trim().length === 0) {
    isValid = false;
    errorMessage = 'Password is required';
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    isValid = false;
    errorMessage = 'Invalid Email id';
  } else if (
    mode === 'signup' &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/.test(
      password
    )
  ) {
    isValid = false;
    errorMessage = 'Invalid Password, try a secured passsword';
  }
  return { isValid, errorMessage };
}
