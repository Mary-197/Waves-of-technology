// menuData.ts
export interface MenuItemData {
  label: string;
  icon: string; // Pode ser o nome do ícone
  path?: string;
  onClick?: () => void;
}

export interface MenuSectionData {
  title?: string;
  items: MenuItemData[];
}

export const menuData: MenuSectionData[] = [
  {
    title: "Menu",
    items: [
      { label: "Colapsar", icon: "FaChevronLeft" }, 
      { label: "Home", icon: "FaHome", path: "/" },
    ],
  },
  {
    title: "Estatísticas",
    items: [
      { label: "Sobre", icon: "FaInfo", path: "/about" },
      { label: "Geral", icon: "FaChartPie", path: "/geral" },
      { label: "Instituição", icon: "FaUniversity", path: "/instituicao" },
      { label: "Docente", icon: "FaUserTie", path: "/docente" },
      { label: "Curso", icon: "FaBook", path: "/curso" },
    ],
  },
  {
    title: "Indicadores",
    items: [
      { label: "Trajetória", icon: "FaChartPie", path: "/trajetoria" },
      { label: "Pós-Graduação", icon: "FaUniversity", path: "/posgraduacao" },
    ],
  },
];
