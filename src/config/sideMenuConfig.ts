import { SideMenuItem, MenuSection } from './menuTypes';

/**
 * Configuração do SideMenu, se path => navegação, senão => onClick
 */
export const sideMenuConfig: MenuSection<SideMenuItem>[] = [
  {
    items: [
      { key: 'home',  path: '/',      label: 'Início',    icon: 'FaHome' },
      { key: 'panel', path: '/panel', label: 'Painel',    icon: 'FaChartPie' },
      { key: 'uni',   path: '/uni',   label: 'Universidade', icon: 'FaUniversity' },
      { key: 'view',  label: 'Visualizar', icon: 'FaBook', onClick: undefined },
      // item de toggle colapso; onClick será injetado no componente
      { key: 'toggle', label: 'Colapsar', icon: 'FaChevronLeft' },
    ]
  }
];
