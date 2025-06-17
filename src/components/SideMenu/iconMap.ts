// src/components/SideMenu/iconMap.ts
import React from 'react';
import {
  PieChart,
  GraduationCap,
  User,
  BookOpen,
  Home,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Info
} from 'lucide-react';

export const iconMap: Record<
  string,
  React.FC<{ size?: number; className?: string; color?: string }>
> = {
  FaChartPie: PieChart,
  FaUniversity: GraduationCap,
  FaUserTie: User,
  FaBook: BookOpen,
  FaHome: Home,
  FaChevronLeft: ChevronLeft,
  FaChevronRight: ChevronRight,
  FaSignOutAlt: LogOut,
  FaInfo: Info,
};
