/**
 * Asynchronously loads the component for HomePage
 */
import loadable from 'Utils/loadable';

export const LoginPage = loadable(() => import('./Login'));
export const RegisterPage = loadable(() => import('./Register'));
export const LogoutPage = loadable(() => import('./Logout'));
