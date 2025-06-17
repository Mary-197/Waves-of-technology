<<<<<<< HEAD
import { NavEntry } from './menutypes';
=======
import { NavEntry } from './menuTypes';
>>>>>>> 5a616746e2ab16f71d663d28101d3d67e88a271f


/**
 * Configuração do Nav, com rota (path) ou ação (onClick)
 */
export const navConfig: NavEntry[] = [
  { key: 'home',  path: '/',      label: 'Início', icon: 'Home' },
  { key: 'about', path: '/about', label: 'Sobre',  icon: 'Info'  },
  {
    key: 'login',
    path: '/login',
    label: 'Login',
    icon: 'LogIn',
    onClick: undefined
  },
  {
    key: 'logout',
    label: 'Sair',
    icon: 'LogOut',
    onClick: undefined
  },
];
