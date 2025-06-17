import {
<<<<<<< HEAD
  PieChart, GraduationCap, User, BookOpen, Home,
  ChevronLeft, ChevronRight, LogOut, Info,
  LucideProps
} from 'lucide-react';

import { ForwardRefExoticComponent, RefAttributes } from 'react';

type CustomIconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref">> & RefAttributes<SVGSVGElement>;

export const iconMap: Record<string, CustomIconComponent> = {
  FaChartPie: PieChart,
  FaUniversity: GraduationCap,
  FaUserTie: User,
  FaBook: BookOpen,
  FaHome: Home,
  FaChevronLeft: ChevronLeft,
  FaChevronRight: ChevronRight,
  FaSignOutAlt: LogOut,
  FaInfo: Info,
=======
  PieChart,
  GraduationCap,
  User,
  BookOpen,
  Home,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Info,
  LogIn
} from 'lucide-react';

import React from 'react';

/**
 * Registry único para todos os ícones do Nav e do SideMenu
 */
export const iconRegistry: Record<
  string,
  React.FC<{ size?: number; className?: string; color?: string }>
> = {
  // SideMenu
  FaChartPie:    PieChart,
  FaUniversity:  GraduationCap,
  FaUserTie:     User,
  FaBook:        BookOpen,
  FaHome:        Home,
  FaChevronLeft: ChevronLeft,
  FaChevronRight:ChevronRight,
  FaSignOutAlt:  LogOut,

  // Nav
  Home:    Home,
  Info:    Info,
  LogIn:   LogIn,
  LogOut:  LogOut,
>>>>>>> 5a616746e2ab16f71d663d28101d3d67e88a271f
};
